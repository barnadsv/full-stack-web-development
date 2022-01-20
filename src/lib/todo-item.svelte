<script lang="ts">
    export let todo: Todo


</script>

<style>
    .todo {
        display: grid;
        grid-template-columns: 2rem 1fr 2rem;
        grid-gap: .5rem;
        align-items: center;
        margin: 0 0 .5rem 0;
        padding: .5rem;
        background-color: white;
        border-radius: 8px;
        filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, .1));
        transform: translate(-1px, -1px);
        transition: filter .2s, transform .2s;
    }

    .todo button {
        width: 2em;
        height: 2em;
        border: none;
        background-color: transparent;
        background-position: 50% 50%;
        background-repeat: no-repeat;
    }

    .todo input {
        flex: 1;
        padding:.5em 2em .5em .8em;
        border-radius: 3px;
    }

    button.toggle {
        border: 1px solid rgba(0, 0, 0, .2);
        border-radius: 50%;
        box-sizing: border-box;
        background-size: 1em auto;
    }

    .text {
        position: relative;
        display: flex;
        align-items: center;
        flex: 1;
    }

    .save {
        position: absolute;
        right: 0;
        opacity: 0;
        background-image: url("data:image/svg+xml,%3Csvg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='save' class='svg-inline--fa fa-save fa-w-14' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3Cpath fill='currentColor' d='M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM224 416c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64zm96-304.52V212c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h228.52c3.183 0 6.235 1.264 8.485 3.515l3.48 3.48A11.996 11.996 0 0 1 320 111.48z'%3E%3C/path%3E%3C/svg%3E");
    }

    .todo input:focus + .save,
    .save:focus {
        transition: opacity .2s;
        opacity: .8;
    }

    .delete {
        background-image: url("data:image/svg+xml,%3Csvg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='trash-alt' class='svg-inline--fa fa-trash-alt fa-w-14' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3Cpath fill='currentColor' d='M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z'%3E%3C/path%3E%3C/svg%3E");
        opacity: .2;
    }

    .delete:hover,
    .delete:focus {
        transition: opacity .2s;
        opacity: 1;
    }

    /* TODO: Uncomment when the API endpoints are available
    .done {
        transform: none;
        opacity: .4;
        filter: drop-shadow(0 0 1px rgba(0, 0, 0, .1));
    }

    .done .toggle {
        background-image: url("data:image/svg+xml,%3Csvg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='check' class='svg-inline--fa fa-check fa-w-16' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='currentColor' d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'%3E%3C/path%3E%3C/svg%3E");
        opacity: .6;
    } */
</style>

<div class="todo">
    <form action="" method="">
        <input type="hidden" name="done" value="" />
        <button aria-label="Mark done/not done" class="toggle"></button>
    </form>

    <form action="" method="" class="text">
        <input type="text" value="{todo.text}"/>
        <button aria-label="Savbe todo" class="save"></button>
    </form>

    <form action="" method="">
        <button aria-label="Delete todo" class="delete"></button>
    </form>
</div>