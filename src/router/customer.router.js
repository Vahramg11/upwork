import FreelancerInfo from "@/components/options/FreelancerInfo.vue";
import CustomerPage from "@/views/customer/CustomerPage.vue";
export default [
  {
    path: "/customer/:username",
    name: "customer",
    component: CustomerPage,
    children: [
        {
            path: "",
            component: import("@/components/options/CustomerInfo.vue"),
            name: 'defaultt'

        },

      {
        path: "freelancers",
        component: () => import("@/components/options/FreelancerOption.vue"),
        name: "freelancers",
      },

      {
        path: "jobs",
        component: () => import("@/components/options/JobOption.vue"),
        name: "jobss"
      },
    //   {
    //     path: "freelancer-info/:freelancerUsername",
    //     name: "customer-freelancer-info",
    //     component: FreelancerInfo,
    //   },

    {
        path: "freelancer-info/:freelancerUsername",
        name: "customer-freelancer-info",
        component: FreelancerInfo,
    },
    ],

    

    meta: {
      check_user: true,
    },
  },

  
];
