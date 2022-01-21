import type { Handle } from '@sveltejs/kit'

// POR ENQUANTO, NÃO FAZ NADA. ESTE É O CÓDIGO ORIGINAL DO SVELTEKIT
export const handle: Handle = async ({ event, resolve }) => {
    const response = await resolve(event)
    return response
}