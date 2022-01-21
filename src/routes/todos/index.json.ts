import type { RequestEvent, RequestHandler } from '@sveltejs/kit'
import { api } from './_api'

// TODO: Persist in database
let todos: Todo[] = []

export const get: RequestHandler = (event: RequestEvent) => {
    return api(event)
}

export const post: RequestHandler = async (event: RequestEvent) => {
    const data = await event.request.formData()
    return api(event, { 
        created_at: new Date(),
        text: data.get('text').toString(),
        done: false
    })
}