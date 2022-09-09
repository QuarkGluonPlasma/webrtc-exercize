



type res = number | string | null | never;

type T<AA extends any> = AA;

type res2 = T<never>;