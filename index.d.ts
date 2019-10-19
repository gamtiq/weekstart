// Created on the basis of http://www.typescriptlang.org/docs/handbook/declaration-files/templates/module-d-ts.html

export as namespace weekstart;

export type DayOfWeek = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export function getWeekStartByRegion(
    regionCode: number | string
): DayOfWeek;

export function getWeekStartByLocale(
    locale: string
): DayOfWeek;
