export function stringNameOf<T extends Record<string, any>>(key: keyof T): string {
    return String(key);
}
