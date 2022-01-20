import type { RequestHandler } from '@sveltejs/kit'

// TODO: Persist in database
let todos: Todo[] = []

export const get: RequestHandler = () => {
    return {
        status: 200,
        body: todos
    }
}

export const post: RequestHandler = async ({ request }) => {
    const data = await request.formData()
    todos.push({
        created_at: new Date(),
        text: data.get('text').toString(),
        done: false
    })

    console.log(data.get('text'))
    return {
        status: 303,
        headers: {
            location: '/'
        }
    }
}