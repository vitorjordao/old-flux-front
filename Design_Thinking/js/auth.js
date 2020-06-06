async function login(email = "", password = "") {
    const response = await fetch('http://localhost:3000/user/login', {
        method: 'POST',
        headers: {
            "Accept": "application/json",
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email,
            password,
        }),
    });

    const body = await response.json();

    return {ok: response.status === 202, body}

}

async function register(name, cpfCnpj, password, email) {
    const response = await fetch('http://localhost:3000/user/create', {
        method: 'POST',
        headers: {
            "Accept": "application/json",
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name,
            "cpf-cnpj": cpfCnpj,
            email,
            password,
        }),
    });

    const body = await response.json();

    return {ok: response.status === 201, body}

}