import type { RequestEvent, RequestHandler } from '@sveltejs/kit'
import { api } from './_api'

// TODO: Persist in database
let todos: Todo[] = []

export const get: RequestHandler = (event: RequestEvent) => {
    // return {
    //     status: 200,
    //     body: todos
    // }
    return api(event)
}

export const post: RequestHandler = async (event: RequestEvent) => {
    const data = await event.request.formData()
    return api(event, { 
        // TODO: Replace with the UID from the database
        uid: `${Date.now()}`,
        created_at: new Date(),
        text: data.get('text').toString(),
        done: false
    })
    // todos.push({
    //     uid: `${Date.now()}`,
    //     created_at: new Date(),
    //     text: data.get('text').toString(),
    //     done: false
    // })

    // console.log(data.get('text'))
    // return {
    //     status: 303,
    //     headers: {
    //         location: '/'
    //     }
    // }
}