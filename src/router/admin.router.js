export default [
    {
        path: "/admin",
        name: "admin",
        children:[
            {
                path: '',
                redirect: 'admin/freelancers', // Redirect to child1 as the default route
                name: 'default'
            },
            {
                path: "freelancers",
                component: ()=>import("@/components/options/FreelancerOption.vue"),
                name: "freelancers",
            },
            {
                path: "customers",
                component: ()=>import("@/components/options/CustomOption.vue"),
                name: "custoemrs",
            },
            {
                path: "freelancer/:username",
                name: 'freelancer-info',    
                component: ()=>import("@/components/options/FreelancerInfo.vue")
            },
            {
                path: "customer/:username",
                name: 'customer-info',    
                component: ()=>import("@/components/options/CustomerInfo.vue")
            },
        ],
        component: ()=>import("@/views/admin/AdminPage.vue"),
        
    },
    // {
    //     path: "/freelancer/:username",
    //     component: FreelancerInfo,
    //     name: 'freelancer-info'
    // }
]