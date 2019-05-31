/// <reference types="node" />
import * as Discord from "discord.js";
import * as adm_panel from "adm-panel2";
import { EventEmitter } from "events";
import { RequestOptions } from "https";
import { URL } from "url";
import * as chillout from "chillout";
export declare const chalk: any;
export declare var stripAnsi: {
    (c: any): any;
};
/**
 * VAL-1: TO BE USED BOTH WITH USER AND BOTS ACCOUNTS  - can make botnet
 * VAL-2: RELOAD ONLY MODIFIED MODULES/COMMANDS!  - external handling, _loadCMD supports singlefile
 * VAL-3: CLEAR UNDERLYING LOGSTRINGS PERIODICALLY
 * VAL-4: CACHEBANK AND NAMEDCACHEBANK IMPLEMENTATION
 */
export declare module Classes {
    namespace Options {
        interface ValeOpts {
            readonly token: string;
            config: {
                cust?: string | number | Buffer;
                prefix: string;
                client?: Discord.ClientOptions;
            };
            custconfig?: {
                panel?: any;
                whook?: any;
                [idx: string]: any;
            };
        }
        interface CommandOpts {
            name: string;
            exp: RegExp;
            desc?: string;
            usage?: string;
            /** Utility, Owner, Admin
             * @type {string}
             * @memberof CommandOpts
             */
            category?: string;
            data?: any;
            body: (message: Discord.Message, vale: Vale) => Promise<any>;
            _remove?: (vale?: Vale) => Promise<any>;
        }
        interface CacheBankOpts {
            size: number;
            cache: CacheEntry[];
            name?: string;
            autopurge?: boolean;
            reusables?: boolean;
        }
    }
    namespace Errors {
        const EBADSZ: RangeError;
    }
    type CacheEntry = {
        timestamp: number;
        entry: any;
    };
    class Vale extends EventEmitter {
        readonly opts: Options.ValeOpts;
        readonly client: Discord.Client;
        whook: Discord.Webhook;
        _debuglog: string;
        _panel: adm_panel.Classes.Panel;
        commands: Map<string, Command>;
        static defaultOpts: Options.ValeOpts;
        constructor(opts?: Options.ValeOpts);
        on(event: "log", listener: (...args: any[]) => void): this;
        on(event: "rawlog", listener: (...args: any[]) => void): this;
        once(event: "log", listener: (...args: any[]) => void): this;
        once(event: "rawlog", listener: (...args: any[]) => void): this;
        start(): this;
        command(message: Discord.Message): Promise<any>;
        _debug(...msg: any): string;
        _loadCMD(from?: string): Promise<this>;
    }
    class Command implements Options.CommandOpts {
        readonly name: string;
        exp: RegExp;
        desc?: string;
        usage?: string;
        category?: string;
        data?: any;
        constructor(opts: Options.CommandOpts);
        body(message?: Discord.Message, vale?: Vale): Promise<any>;
        _remove(vale?: Vale): Promise<any>;
    }
    class CacheBank implements Options.CacheBankOpts {
        size: number;
        cache: CacheEntry[];
        name: string;
        autopurge: boolean;
        reusables: boolean;
        private static cntr;
        constructor(name?: string, size?: number, autopurge?: boolean, reusables?: boolean);
        get(item: number): any;
        purge(items?: number): Promise<CacheEntry[]>;
        push(item: any): number;
        _arrange(): CacheEntry[];
    }
    function fetch(url: string | RequestOptions | URL): Promise<string>;
    function failsafe(this: Discord.Message, ...params: any[]): Promise<Discord.Message | Discord.Message[]>;
}
export default Classes;
export { chillout };
//# sourceMappingURL=Classes.d.ts.map