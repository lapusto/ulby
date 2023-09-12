type Mods = Record<string, boolean | string>

export function classNames (cls: string, mods: Mods, adds: string[]): string {

    return [
        cls, 
        ...adds,
        ...Object.entries(mods)
        .filter(([className, value]) => Boolean(value))
        .map(([className, value]) => className)
    ].join(" ")
}