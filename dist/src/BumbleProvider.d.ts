import { ProviderOptions, PuppeteerProvider } from "@master-list/core";
export interface BumbleOptions extends ProviderOptions {
    email: string;
    password: string;
}
export declare const defaultOptions: ProviderOptions;
export declare class BumbleProvider extends PuppeteerProvider {
    options: BumbleOptions;
    constructor(options: BumbleOptions);
    initialize(): Promise<boolean>;
    reload(): Promise<void>;
    login(): Promise<unknown>;
    update(): Promise<unknown>;
}
