export const users = {
    standardUserOne: {
        email: "customer@practicesoftwaretesting.com",
        password: "welcome01"
    },
    standardUserTwo: {
        email: "customer2@practicesoftwaretesting.com",
        password: "welcome01"
    },
    standardUserThree: {
        email: "customer3@practicesoftwaretesting.com",
        password: "pass123"
    },
    userWithInInvalidEmail: {
        email: "customer3.com",
        password: "pass123"
    },
    userWithInvalidPassword: {
        email: "customer3@practicesoftwaretesting.com",
        password: "so"
    },
    userWithWrongPassword: {
        email: "customer2@practicesoftwaretesting.com",
        password: "ssdasdasdao"
    },
    invalidUser: {
        email: "NotARealUser@practicesoftwaretesting.com",
        password: "SomeRandomText@here"
    },
    userWithEmptiedCredentials: {
        email: "",
        password: ""
    },
    userWithSpaceAsCredentials: {
        email: " ",
        password: " "
    }


}