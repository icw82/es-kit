import type { TIME_DIRECTION } from './constants.mjs';

export type TimeDirection =
    (typeof TIME_DIRECTION)[keyof typeof TIME_DIRECTION];

export type WeekDayIndex =
	0 | // Вс
	1 | // Пн
	2 | // Вт
	3 | // Ср
	4 | // Чт
	5 | // Пт
	6; // Сб
