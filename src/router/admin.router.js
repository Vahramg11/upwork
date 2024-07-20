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
                name: "freelancerss",
            },
            {
                path: "customers",
                component: ()=>import("@/components/options/CustomOption.vue"),
                name: "customers",
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

            {
                path: "jobs",
                name: "jobs",
                component: ()=>import("@/components/options/JobOption.vue")
            }
        ],
        component: ()=>import("@/views/admin/AdminPage.vue"), 
        meta: {
            check_user: true
        }
        
    },
    // {
    //     path: "/freelancer/:username",
    //     component: FreelancerInfo,
    //     name: 'freelancer-info'
    // }
]

