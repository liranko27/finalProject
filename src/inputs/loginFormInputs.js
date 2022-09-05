export function loginInputs() {
    return [
        {
            id: 1,
            name: "email",
            type: "email",
            placeholder: "Email",
            label: "Email",
            errorMessage:
                "should be a valid email",
            pattern: "^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$",
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
    email: "",
    password: "",
}