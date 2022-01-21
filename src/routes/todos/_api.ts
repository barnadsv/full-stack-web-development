import type { RequestEvent } from '@sveltejs/kit'

// TODO: Persist in database
let todos: Todo[] = []

export const api = ({ params, request, url }: RequestEvent, data?: Record<string, unknown>) => {
    let status = 500
    let body = {}

    console.log('METHOD: ', request.method)
    console.log('URL _method: ', url.searchParams.get('_method'))

    switch(request.method.toUpperCase()) {
        case 'GET':
            status = 200
            body = todos
            break;
        case 'POST':
            todos.push(data as Todo)
            body = data
            status = 201
            break;
        case 'DELETE':
            todos = todos.filter(todo => todo.uid !== params.uid)
            status = 200
            break;
        case 'PATCH':
            todos = todos.map(todo => {
                if (todo.uid === params.uid) {
                    todo.text = data.text as string
                }
                return todo
            })
            status = 200
            break;
        default:
            break;
    }

    if (request.method.toUpperCase() !== 'GET') {
        return {
            status: 303,
            headers: {
                location: '/'
            }
        }
    }

    return {
        status,
        body
    }
}