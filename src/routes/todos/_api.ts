import type { RequestEvent } from '@sveltejs/kit'

// TODO: Persist in database
let todos: Todo[] = []

export const api = ({ params, request, url }: RequestEvent, data?: Record<string, unknown>) => {
    let status = 500
    let body = {}

    console.log(url)

    switch(request.method.toUpperCase()) {
        case 'GET':
            status = 200
            body = todos
            break;
        case 'POST':
            if (url.searchParams.has('_method')) {
                console.log(url.searchParams.get('_method'))
                if (url.searchParams.get('_method').toUpperCase() === 'DELETE') {
                    todos = todos.filter(todo => todo.uid !== params.uid)
                    console.log('DELETE!')
                }
                if (url.searchParams.get('_method').toUpperCase() === 'PATCH') {
                    console.log('PATCH!')
                    todos = todos.map(todo => {
                        if (todo.uid === params.uid) {
                            todo.text = data.text as string
                        }
                        return todo
                    })
                    console.log('PATCH!')
                }
                status = 200
            } else {
                todos.push(data as Todo)
                body = data
                status = 201
            }
            break;
        // case 'DELETE':
        //     todos = todos.filter(todo => todo.uid !== params.uid)
        //     status = 200
        //     break;
        // case 'PATCH':
        //     todos = todos.map(todo => {
        //         if (todo.uid === params.uid) {
        //             todo.text = data.text as string
        //         }
        //         return todo
        //     })
        //     status = 200
        //     break;
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