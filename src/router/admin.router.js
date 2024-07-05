import AdminPage from "@/views/admin/AdminPage.vue"
import MainOption from "@/components/options/MainOption.vue"
import CustomOption from "@/components/options/CustomOption.vue"
import FreelancerInfo from "@/components/options/FreelancerInfo.vue"
export default [
    {
        path: "/admin",
        name: "admin",
        children:[
            {
                path: '',
                redirect: 'admin/freelancers' // Redirect to child1 as the default route
            },
            {
                path: "freelancers",
                component: MainOption,
                default: true
            },
            {
                path: "customers",
                component: CustomOption,
                default: true
            },
            {
                path: "freelancer/:username",
                name: 'freelancer-info',    
                component: FreelancerInfo
            },
        ],
        component: AdminPage,
        
    },
    // {
    //     path: "/freelancer/:username",
    //     component: FreelancerInfo,
    //     name: 'freelancer-info'
    // }
]