export function regInputs() {
    return [
        {
            id: 1,
            name: "first_name",
            type: "text",
            placeholder: "First Name",
            label: "First Name",
            errorMessage:
                "First name should be 3-16 chars and not inclued speatial char",
            pattern: "^[A-Za-z0-9]{3,16}$",
            required: true,
        },
        {
            id: 2,
            name: "last_name",
            type: "text",
            placeholder: "Last Name",
            label: "Last Name",
            errorMessage:
                "Last name should be 3-16 chars and not inclued speatial char",
            pattern: "^[A-Za-z0-9]{3,16}$",
            required: true,
        },
        {
            id: 3,
            name: "email",
            type: "email",
            placeholder: "Email",
            label: "Email",
            errorMessage: "should be a valid email",
            required: true,
            pattern: "^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$",
        },
        {
            id: 4,
            name: "password",
            type: "password",
            placeholder: "Password",
            label: "Password",
            errorMessage:
                "Password should be 8-20 chars must includ at least 1 letter , 1 number and 1 spatial char",
            required: true,
            pattern: "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$",
        },
        {
            id: 5,
            name: "confirmPassword",
            type: "password",
            placeholder: "Confirm Password",
            label: "Confirm Password",
            errorMessage: "Password dont match ",
            required: true,
            pattern: '',
        },

    ]
}

export const regValues = {
    email: "",
    first_name: "",
    last_name: "",
    password: "",
    confirmPassword: "",
}