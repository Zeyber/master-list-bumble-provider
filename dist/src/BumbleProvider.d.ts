import { ProviderOptions, PuppeteerProvider } from "@master-list/core";
export declare enum BUMBLE_NOTIFICATION_MODE {
    YOUR_MOVE = "YOUR_MOVE",
    UNREAD = "UNREAD"
}
export interface BumbleOptions extends ProviderOptions {
    email: string;
    password: string;
    notifyOn?: BUMBLE_NOTIFICATION_MODE[];
}
export declare const defaultOptions: ProviderOptions | BumbleOptions;
export declare class BumbleProvider extends PuppeteerProvider {
    options: BumbleOptions;
    constructor(options: BumbleOptions);
    initialize(): Promise<boolean>;
    reload(): Promise<void>;
    login(): Promise<unknown>;
    update(): Promise<unknown>;
}
