
const newMessage = {
    message: 'Hola Mundo',
    title: 'Fernando'
}

const funcion = () => newMessage.message;

export const FirstApp = () => {
    return (
        <h1>{funcion()}</h1>
    );
}