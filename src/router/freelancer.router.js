import FreelancerPage from "@/views/freelancer/FreelancerPage.vue"
export default [
    {
        path: "/freelancer/:username",
        name: "freelancer",
        component: FreelancerPage,
        children: [
            {
                path: "",
                component: import("@/components/options/FreelancerInfo.vue"),
                name: 'defaulttt',
            },
            {
                path: "customers",
                component: () => import("@/components/options/CustomOption.vue"),
                name: "customerss",
            },

            {
                path: "jobs",
                component: () => import("@/components/options/JobOption.vue"),
                name: "jobsss"
            },
            {
                path: "customer-info/:customerUsername",
                name: "freelancer-customer-info",
                component: import("@/components/options/CustomerInfo.vue"),
            }
        ],
        meta: {
            check_user: true
        }
    }
]