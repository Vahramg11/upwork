import SignIn from "@/views/authentication/SignIn.vue"
import SignUp from "@/views/authentication/SignUp.vue"
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