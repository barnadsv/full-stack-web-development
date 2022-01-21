import type { RequestEvent, RequestHandler } from '@sveltejs/kit'
import { api } from './_api'

export const del: RequestHandler = (event: RequestEvent) => {
    return api(event)
}