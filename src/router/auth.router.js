import SignIn from "../views/authentication/SignIn"
import SignUp from "../views/authentication/SignUp"
export default [
    {
        path: '/',
        name: 'sign_in',
        component: SignIn
    },
    {
        path: '/sign_up',
        name: 'sign_up',
        component: SignUp
    }
];