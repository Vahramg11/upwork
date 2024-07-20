import FreelancerPage from "@/views/freelancer/FreelancerPage.vue"
export default [
    {
        path: "/freelancer/:username",
        name: "freelancer",
        component: FreelancerPage,
        children:[
            {
                path: "",
                component: import("@/components/options/FreelancerInfo.vue"),
                name: 'defaultt'
            },

        ],
        meta: {
            check_user: true
        }

    }
]