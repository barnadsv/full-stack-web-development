import type { RequestEvent, RequestHandler } from '@sveltejs/kit'
import { api } from './_api'

export const del: RequestHandler = (event: RequestEvent) => {
    return api(event)
}

export const patch: RequestHandler = async (event: RequestEvent) => {
    const data = await event.request.formData()
    return api(event, {
        text: data.has('text') ? data.get('text').toString() : undefined,
        done: data.has('done') ? !!data.get('done') : undefined
    })
}