import type { RequestEvent } from '@sveltejs/kit'
import PrismaClient from '$lib/prisma'

const prisma = new PrismaClient()

export const api = async ({ params, request, url }: RequestEvent, data?: Record<string, unknown>) => {
    let status = 500
    let body = {}

    // console.log('METHOD: ', request.method)
    // console.log('URL _method: ', url.searchParams.get('_method'))

    switch(request.method.toUpperCase()) {
        case 'GET':
            status = 200
            body = await prisma.todo.findMany()
            break;
        case 'POST':
            body = await prisma.todo.create({
                data: {
                    created_at: data.created_at as Date,
                    done: data.done as boolean,
                    text: data.text as string
                }
            })
            status = 201
            break;
        case 'DELETE':
            body = await prisma.todo.delete({
                where: {
                    uid: params.uid
                }
            })
            status = 200
            break;
        case 'PATCH':
            body = await prisma.todo.update({
                where: {
                    uid: params.uid
                },
                data: {
                    done: data.done as boolean,
                    text: data.text as string
                }
            })
            status = 200
            break;
        default:
            break;
    }

    if (request.method.toUpperCase() !== 'GET' && 
        (!request.headers.has('Accept') || request.headers.get('Accept') !== 'application/json')) {
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