const greet = () => {
    const prefix = "hello";
    return (name) => {
        console.log(`${prefix} ${name}`);
    }
}

greet()('baba');