export function loginInputs() {
    return [
        {
            id: 1,
            name: "username",
            type: "text",
            placeholder: "Username",
            label: "Username",
            errorMessage:
                "username should be 3-16 chars and not inclued speatial char",
            pattern: "^[A-Za-z0-9]{3,16}$",
            required: true,
        },
        {
            id: 2,
            name: "password",
            type: "password",
            placeholder: "Password",
            label: "Password",
            errorMessage:
                "Password should be 8-20 chars must includ at least 1 letter , 1 number and 1 spatial char",
            required: true,
            pattern:
                "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$",
        }
    ]
}

export const loginValues = {
    username: "",
    password: "",
}