import { invalid } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
	default: async () => {
        return invalid(400);
	}
};

export const prerender = false;
