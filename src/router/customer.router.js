import CustomerPage from "@/views/customer/CustomerPage.vue"
export default [
    {
        path: "/customer/:username",
        name: "customer",
        component: CustomerPage,
        meta:{
            check_user: true
        }
    }
]