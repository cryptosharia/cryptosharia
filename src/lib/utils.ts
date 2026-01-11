import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { MONTHS } from './constants';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithoutChild<T> = T extends { child?: any } ? Omit<T, 'child'> : T;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithoutChildren<T> = T extends { children?: any } ? Omit<T, 'children'> : T;
export type WithoutChildrenOrChild<T> = WithoutChildren<WithoutChild<T>>;
export type WithElementRef<T, U extends HTMLElement = HTMLElement> = T & { ref?: U | null };

//
//

export function getPageHeight() {
	return document.documentElement.offsetHeight;
}

export function getViewportHeight() {
	return document.documentElement.clientHeight;
}

export function formatDate(date: Date, monthType: 'text' | 'number' = 'text'): string {
	const d = date.getDate();
	const m = date.getMonth(); // 0-indexed
	const y = date.getFullYear();

	// padstart is used to ensure that the day is always two digits
	// e.g. 4 -> 04, 17 -> 17
	const day = d.toString().padStart(2, '0');

	if (monthType === 'text') {
		return `${day} ${MONTHS[m]} ${y}`;
	} else {
		// padstart is used to ensure that the month is always two digits
		// e.g. 4 -> 04, 12 -> 12
		const month = (m + 1).toString().padStart(2, '0');
		return `${day}-${month}-${y}`;
	}
}
