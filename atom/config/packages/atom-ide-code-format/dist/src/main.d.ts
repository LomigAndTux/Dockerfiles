import type { Disposable } from "atom";
import type { BusySignalService } from "atom-ide-base";
import type { RangeCodeFormatProvider, FileCodeFormatProvider, OnTypeCodeFormatProvider, OnSaveCodeFormatProvider } from "./types";
export { default as config } from "./config.json";
export declare function activate(): void;
export declare function consumeRangeProvider(provider: RangeCodeFormatProvider): Disposable;
export declare function consumeFileProvider(provider: FileCodeFormatProvider): Disposable;
export declare function consumeOnTypeProvider(provider: OnTypeCodeFormatProvider): Disposable;
export declare function consumeOnSaveProvider(provider: OnSaveCodeFormatProvider): Disposable;
export declare function consumeBusySignal(busySignalService: BusySignalService): Disposable;
export declare function deactivate(): void;
export { consumeLegacyProvider } from "./legacy-provider";
