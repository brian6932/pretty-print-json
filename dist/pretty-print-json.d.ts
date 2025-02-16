//! pretty-print-json v1.4.0 ~~ https://pretty-print-json.js.org ~~ MIT License

export type FormatSettings = {
    indent: number;
    lineNumbers: boolean;
    linkUrls: boolean;
    linksNewTab: boolean;
    quoteKeys: boolean;
};
export type FormatOptions = Partial<FormatSettings>;
export type JsonType = 'key' | 'string' | 'number' | 'boolean' | 'null' | 'mark';
declare const prettyPrintJson: {
    version: string;
    toHtml(thing: unknown, options?: FormatOptions): string;
};
export { prettyPrintJson };
