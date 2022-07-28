export function inputsArr() {
    return {
        password: [
            {
                id: 1,
                name: "oldpassword",
                type: "password",
                placeholder: "Old Password",
                label: "Old Password",
                errorMessage:
                    "Password should be 8-20 chars must includ at least 1 letter , 1 number and 1 spatial char",
                required: true,
                pattern:
                    "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$",
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
            }, {
                id: 3,
                name: "confirmPassword",
                type: "password",
                placeholder: "Confirm Password",
                label: "Confirm Password",
                errorMessage: "Password dont match ",
                required: true,
                pattern: '',
            },
        ],
        name: [
            {
                id: 1,
                name: "firstName",
                type: "text",
                placeholder: "First Name",
                label: "First Name",
                errorMessage:
                    "First name should be 3-16 chars and not inclued speatial char",
                pattern: "^[A-Za-z0-9]{3,16}$",
                required: true,
            }, {
                id: 2,
                name: "lastName",
                type: "text",
                placeholder: "Last Name",
                label: "Last Name",
                errorMessage:
                    "Last name should be 3-16 chars and not inclued speatial char",
                pattern: "^[A-Za-z0-9]{3,16}$",
                required: true,
            }, {
                id: 3,
                name: "phone",
                type: "tel",
                placeholder: "Phone",
                label: "Phone number",
                errorMessage:
                    "Phone number should be 8-20 digits and not inclued speatial char or letters",
                pattern: "^[0-9]{8,20}$",
                required: true,
            },
        ],
        address: [
            {
                id: 1,
                name: "city",
                type: "text",
                placeholder: "City",
                label: "City",
                errorMessage:
                    "city should be 2-10 chars and not inclued speatial char or number",
                pattern: "^[A-Za-z]{2,10}$",
                required: true,
            },
            {
                id: 2,
                name: "street",
                type: "text",
                placeholder: "Street",
                label: "Street",
                errorMessage:
                    "street should be 2-10 chars and not inclued speatial char or number",
                pattern: "^[A-Za-z]{2,10}$",
                required: true,
            },
            {
                id: 3,
                name: "zipcode",
                type: "number",
                placeholder: "Zip code",
                label: "Zip code",
                errorMessage:
                    "zipcode should be 3-16 chars and not inclued speatial char or number",
                pattern: "^[0-9]{4,10}$",
                required: false,
            }
        ],
        email: [
            {
                id: 1,
                name: "oldemail",
                type: "email",
                placeholder: "Old Email",
                label: "Old Email",
                errorMessage: "should be a valid email",
                required: true,
                pattern: "^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$",
            },
            {
                id: 2,
                name: "email",
                type: "email",
                placeholder: "Email",
                label: "Email",
                errorMessage: "should be a valid email",
                required: true,
                pattern: "^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$",
            },
            {
                id: 3,
                name: "confirmEmail",
                type: "email",
                placeholder: "Confirm Email",
                label: "Confirm Email",
                errorMessage: "should be a valid email",
                required: true,
                pattern: "^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$",
            }
        ],
    }
}


export const myValues = {
    password: {
        oldpassword: '',
        password: '',
        confirmPassword: '',
    },
    name: {
        firstName: '',
        lastName: ''
    },
    address: {
        city: '',
        street: '',
        zipcode: '',
    },
    email: {
        oldemail: '',
        email: '',
        confirmEmail: '',
    }

}