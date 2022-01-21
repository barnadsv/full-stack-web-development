import type { RequestEvent } from '@sveltejs/kit'

// TODO: Persist in database
let todos: Todo[] = []

export const api = ({ params, request, url }: RequestEvent, todo?: Todo) => {
    let status = 500
    let body = {}

    switch(request.method.toUpperCase()) {
        case 'GET':
            status = 200
            body = todos
            break;
        case 'POST':
            if (url.searchParams.has('_method') && url.searchParams.get('_method').toUpperCase() === 'DELETE') {
                todos = todos.filter(todo => todo.uid !== params.uid)
                status = 200
            } else {
                todos.push(todo)
                body = todo
                status = 201
            }
        case 'DELETE':
            todos = todos.filter(todo => todo.uid !== params.uid)
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