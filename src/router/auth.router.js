import SignIn from "@/views/authentication/SignIn.vue"
import SignUp from "@/views/authentication/SignUp.vue"
export default [
    {
        path: '/',
        name: 'sign_in',
        component: SignIn,
        meta:{
            auth: true,
        }
    },
    {
        path: '/sign_up',
        name: 'sign_up',
        component: SignUp,
        meta:{
            auth: true,

        }
    },
    {
        path: "/forget_password",
        name: 'forget',
        component: ()=>import("@/views/authentication/ForgetPassword.vue")
    },
    {
        path: "/confirm/:token/:id",
        name: "confirm", 
        component: ()=>import("@/views/authentication/ChangePassword.vue")
    }
];