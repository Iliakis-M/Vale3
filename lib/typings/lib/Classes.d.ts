/// <reference types="node" />
import * as Discord from "discord.js";
import * as adm_panel from "adm-panel2";
import { EventEmitter } from "events";
export declare const chalk: any;
export declare var stripAnsi: any;
/**
 * VAL-1: TO BE USED BOTH WITH USER AND BOTS ACCOUNTS
 */
export declare module Classes {
    namespace Options {
        interface ValeOpts {
            token?: string;
            config?: any;
            custconfig?: any;
        }
        interface CommandOpts {
            name: string;
            exp: RegExp;
            desc: string;
            usage: string;
            /**
             * Utility, Owner
             *
             * @type {string}
             * @memberof CommandOpts
             */
            category: string;
            data?: any;
            body?: (message: Discord.Message, vale: Vale) => Promise<any>;
            _remove?: (vale?: Vale) => Promise<any>;
        }
        interface CacheBankOpts {
            size: number;
            cache: CacheEntry[];
            name?: string;
            autopurge?: boolean;
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
        opts: Options.ValeOpts;
        client: Discord.Client;
        whook: Discord.Webhook;
        _debuglog: string;
        _panel: adm_panel.Classes.Panel;
        commands: Map<string, Command>;
        static defaultOpts: Options.ValeOpts;
        constructor(opts?: Options.ValeOpts);
        start(): this;
        command(message: Discord.Message): Promise<string | void>;
        _debug(...msg: any): string;
        _loadCMD(from?: string): Promise<this>;
    }
    class Command implements Options.CommandOpts {
        name: string;
        exp: RegExp;
        desc: string;
        usage: string;
        category: string;
        data: any;
        constructor(opts: Options.CommandOpts);
        body(message?: Discord.Message, vale?: Vale): Promise<void>;
        _remove(vale?: Vale): Promise<void>;
    }
    class CacheBank implements Options.CacheBankOpts {
        size: number;
        cache: CacheEntry[];
        name: string;
        autopurge: boolean;
        static cntr: number;
        constructor(name?: string, size?: number, autopurge?: boolean);
        get(item: number): CacheEntry;
        purge(items?: number): CacheEntry[];
        push(item: any): number;
        _arrange(): CacheEntry[];
    }
}
export default Classes;
//# sourceMappingURL=Classes.d.ts.map