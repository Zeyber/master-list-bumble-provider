import { ProviderOptions, PuppeteerProvider } from "@master-list/core";
import { loginWithFacebook } from "@zeyber/master-list-facebook-provider";

export enum BUMBLE_NOTIFICATION_MODE {
  YOUR_MOVE = "YOUR_MOVE",
  UNREAD = "UNREAD",
}

export interface BumbleOptions extends ProviderOptions {
  email: string;
  password: string;
  notifyOn?: BUMBLE_NOTIFICATION_MODE[];
}

export const defaultOptions: ProviderOptions | BumbleOptions = {
  providerName: "Bumble",
  notifyOn: [
    BUMBLE_NOTIFICATION_MODE.YOUR_MOVE,
    BUMBLE_NOTIFICATION_MODE.UNREAD,
  ],
};

export class BumbleProvider extends PuppeteerProvider {
  constructor(public options: BumbleOptions) {
    super({
      ...defaultOptions,
      ...options,
    });
  }

  initialize(): Promise<boolean> {
    return super.initialize(async () => {
      await this.login();
    });
  }

  reload() {
    return super.reload(async () => {
      return await this.update();
    });
  }

  async login() {
    return new Promise(async (resolve, reject) => {
      try {
        await (async () => {
          await loginWithFacebook({
            page: this.page,
            email: this.options.email,
            password: this.options.password,
          });

          await this.page.goto("https://bumble.com/get-started", {
            waitUntil: ["load", "networkidle2"],
          });

          const consentFrame = await this.page.waitForSelector(
            'iframe[src*="https://consent.bumble.com"]'
          );
          const consentContent = await consentFrame.contentFrame();

          const manageCookiesButton = await consentContent.waitForSelector(
            '[title="Manage Cookies"]'
          );
          await manageCookiesButton.click();

          await this.page.waitForTimeout(3000);

          const privacyManagerFrame = await this.page.waitForSelector(
            'iframe[src*="https://consent.bumble.com/privacy-manager"]'
          );
          const privacyManagerContent =
            await privacyManagerFrame.contentFrame();
          const rejectButton = await privacyManagerContent.waitForSelector(
            '[title="Reject All"]'
          );
          await rejectButton.click();

          const loginWithFacebookBtn = await this.page.waitForSelector(
            'div[class="button button--size-m  color-provider-facebook button--filled"]'
          );
          await loginWithFacebookBtn.click();

          resolve(true);
        })();
      } catch (e) {
        reject(e);
      }
    });
  }

  async update() {
    return new Promise(async (resolve) => {
      const markers = await this.page.$$("div.contact");
      const chats = [];
      const notifyOn = this.options.notifyOn ?? (<any>defaultOptions).notifyOn;

      for (const marker of markers) {
        let val: string | undefined;

        if (!val && notifyOn.includes(BUMBLE_NOTIFICATION_MODE.UNREAD)) {
          val = await marker.evaluate((el) =>
            el.getElementsByClassName("contact__notification-mark")?.length
              ? el.getAttribute("data-qa-name")
              : undefined
          );
        }

        if (!val && notifyOn.includes(BUMBLE_NOTIFICATION_MODE.YOUR_MOVE)) {
          val = await marker.evaluate((el) =>
            el.getElementsByClassName("contact__move-label")?.length
              ? el.getAttribute("data-qa-name")
              : undefined
          );
        }

        if (val) {
          chats.push(val);
        }
      }

      return resolve(chats);
    });
  }
}
