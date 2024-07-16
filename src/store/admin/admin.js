import VueCookies from 'vue-cookies';
import axios from 'axios';
const Axios = axios.create({
  baseURL: 'http://127.0.0.1:8000/',
});
Axios.interceptors.request.use((config) => {
  const token = VueCookies.get("access");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});
export default {
  namespaced: true,
  state: {

    jobs: [
      {
        "id": 1,
        "process": 1,
        "title": "Data Scientist",
        "company": "Data Insights Co.",
        "location": "San Francisco, CA",
        "salary": "120,000",
        "description": "Use advanced statistical methods to analyze large datasets and extract insights.",
        "customer": {
          "id": 1,
          "first_name": "Alice",
          "last_name": "Johnson",
          "email": "alice.johnson@example.com",
          "photo": "https://randomuser.me/api/portraits/women/1.jpg"
        },
        "skills": [
          { "id": 4, "skill": "Python" },
          { "id": 5, "skill": "Machine Learning" },
          { "id": 6, "skill": "SQL" }
        ]
      },
      {
        "id": 2,
        "process": 2,
        "title": "Software Engineer",
        "company": "Tech Solutions Inc.",
        "location": "New York, NY",
        "salary": "110,000",
        "description": "Develop scalable web applications using modern technologies.",
        "customer": {
          "id": 2,
          "first_name": "Bob",
          "last_name": "Smith",
          "email": "bob.smith@example.com",
          "photo": "https://randomuser.me/api/portraits/men/2.jpg"
        },
        "skills": [
          { "id": 1, "skill": "JavaScript" },
          { "id": 2, "skill": "React" },
          { "id": 3, "skill": "Node.js" }
        ]
      },
      {
        "id": 3,
        "process": 3,
        "title": "Frontend Developer",
        "company": "Web Solutions Co.",
        "location": "Toronto, Canada",
        "salary": "95,000",
        "description": "Develop responsive web applications using modern frontend frameworks and technologies.",
        "customer": {
          "id": 3,
          "first_name": "Carol",
          "last_name": "Williams",
          "email": "carol.williams@example.com",
          "photo": "https://randomuser.me/api/portraits/women/3.jpg"
        },
        "skills": [
          { "id": 1, "skill": "JavaScript" },
          { "id": 2, "skill": "React" },
          { "id": 20, "skill": "Vue.js" }
        ]
      },
      {
        "id": 4,
        "process": 4,
        "title": "Mobile App Developer",
        "company": "App Creators Ltd.",
        "location": "London, UK",
        "salary": "90,000",
        "description": "Develop native mobile applications for iOS and Android platforms.",
        "customer": {
          "id": 4,
          "first_name": "David",
          "last_name": "Brown",
          "email": "david.brown@example.com",
          "photo": "https://randomuser.me/api/portraits/men/4.jpg"
        },
        "skills": [
          { "id": 7, "skill": "Swift" },
          { "id": 8, "skill": "Java" },
          { "id": 9, "skill": "Android Development" }
        ]
      },
      {
        "id": 5,
        "process": 5,
        "title": "UI/UX Designer",
        "company": "Creative Designs Co.",
        "location": "Seattle, WA",
        "salary": "85,000",
        "description": "Design user-friendly interfaces and collaborate with developers to implement designs.",
        "customer": {
          "id": 5,
          "first_name": "Emma",
          "last_name": "Davis",
          "email": "emma.davis@example.com",
          "photo": "https://randomuser.me/api/portraits/women/5.jpg"
        },
        "skills": [
          { "id": 10, "skill": "UI/UX Design" },
          { "id": 11, "skill": "Adobe XD" },
          { "id": 12, "skill": "Sketch" }
        ]
      },
      {
        "id": 6,
        "process": 6,
        "title": "Backend Developer",
        "company": "Software Solutions Co.",
        "location": "Berlin, Germany",
        "salary": "95,000",
        "description": "Build and maintain scalable backend systems using modern frameworks.",
        "customer": {
          "id": 6,
          "first_name": "Frank",
          "last_name": "Gonzalez",
          "email": "frank.gonzalez@example.com",
          "photo": "https://randomuser.me/api/portraits/men/6.jpg"
        },
        "skills": [
          { "id": 1, "skill": "JavaScript" },
          { "id": 16, "skill": "Node.js" },
          { "id": 17, "skill": "MongoDB" }
        ]
      },
      {
        "id": 7,
        "process": 7,
        "title": "Cybersecurity Analyst",
        "company": "Security Solutions Ltd.",
        "location": "Sydney, Australia",
        "salary": "130,000",
        "description": "Monitor and analyze security incidents, and implement measures to protect systems and data.",
        "customer": {
          "id": 7,
          "first_name": "Grace",
          "last_name": "Miller",
          "email": "grace.miller@example.com",
          "photo": "https://randomuser.me/api/portraits/women/7.jpg"
        },
        "skills": [
          { "id": 21, "skill": "Cybersecurity" },
          { "id": 22, "skill": "Penetration Testing" },
          { "id": 23, "skill": "Security Incident Response" }
        ]
      },
      {
        "id": 8,
        "process": 8,
        "title": "DevOps Engineer",
        "company": "Cloud Services Corp.",
        "location": "Austin, TX",
        "salary": "110,000",
        "description": "Manage infrastructure as code and streamline deployment pipelines.",
        "customer": {
          "id": 8,
          "first_name": "Henry",
          "last_name": "Lee",
          "email": "henry.lee@example.com",
          "photo": "https://randomuser.me/api/portraits/men/8.jpg"
        },
        "skills": [
          { "id": 13, "skill": "DevOps" },
          { "id": 14, "skill": "Docker" },
          { "id": 15, "skill": "Kubernetes" }
        ]
      },
      {
        "id": 9,
        "process": 9,
        "title": "AI/ML Engineer",
        "company": "AI Innovations Co.",
        "location": "Tokyo, Japan",
        "salary": "12,000,000",
        "description": "Develop and deploy machine learning models for AI-powered applications.",
        "customer": {
          "id": 9,
          "first_name": "Isabella",
          "last_name": "Moore",
          "email": "isabella.moore@example.com",
          "photo": "https://randomuser.me/api/portraits/women/9.jpg"
        },
        "skills": [
          { "id": 5, "skill": "Machine Learning" },
          { "id": 24, "skill": "Deep Learning" },
          { "id": 25, "skill": "Natural Language Processing" }
        ]
      },
      {
        "id": 10,
        "process": 10,
        "title": "Full Stack Developer",
        "company": "Tech Solutions Co.",
        "location": "Austin, TX",
        "salary": 100000,
        "description": "Develop end-to-end web applications using frontend and backend technologies.",
        "customer": {
          "id": 10,
          "first_name": "James",
          "last_name": "Anderson",
          "email": "james.anderson@example.com",
          "photo": "https://randomuser.me/api/portraits/men/10.jpg"
        },
        "skills": [
          { "id": 1, "skill": "JavaScript" },
          { "id": 2, "skill": "React" },
          { "id": 16, "skill": "Node.js" },
          { "id": 17, "skill": "MongoDB" }
        ]
      }
    ],


    customers: [], 
    freelancers: [],
    one_freelancer: null,
    one_customer: null,


  },
  getters: {
    get_freelancers(state) {
      return state.freelancers
    },
    get_customers(state) {
      return state.customers
    },
    get_jobs(state) {
      return state.jobs
    },
    get_one_freelancer(state) {
      return state.one_freelancer
    },
    get_one_customer(state) {
      return state.one_customer
    }
  },
  actions: {
    async req_freelancers({ commit }) {
      const { data } = await Axios.get("freelancers/")
      commit("change_freelancers", data)
    },
    async req_customers({ commit }) {
      const { data } = await Axios.get("customers/")
      commit("change_customers", data)
    },

    async req_one_freelancer({ commit, dispatch }, username) {
      const { data } = await Axios.get(`freelancer/${username}/`)
      commit("change_one_freelancer", data)
      dispatch("freelancer/get_skills",data, {root: true})
    },

    async req_one_customer({ commit }, username) {
      const { data } = await Axios.get(`customer/${username}/`)
      commit("change_one_customer", data)
    },

    async change_freelancer_info(_, obj) {
      await Axios.patch(`change_info/freelancer/${obj.id}/`, obj)
    },
    async change_customer_info(_, obj) {
      await Axios.patch(`change_info/freelancer/${obj.id}/`, obj)
    },
    async remove_freelancer({ commit }, id) {
      await Axios.delete(`delete/freelancer/${id}/`)
      commit("delete_freelancer", id)
    },
    async remove_customer({ commit }, id) {
      await Axios.delete(`delete/customer/${id}/`)
      commit("delete_customer", id)
    },

  },
  mutations: {
    change_freelancers(state, new_value) {
      state.freelancers = new_value
    },
    change_customers(state, new_value) {
      state.customers = new_value
    },
    change_one_freelancer(state, new_value) {
      state.one_freelancer = new_value
    },
    change_one_customer(state, new_value) {
      state.one_customer = new_value
    },
    delete_freelancer(state, id) {
      state.freelancers.splice(state.freelancers.findIndex(elm => elm.id == id), 1)
    },
    delete_customer(state, id) {
      state.customers.splice(state.customers.findIndex(elm => elm.id == id), 1)
    },
    add_job_to_customer(state, data){
      state, data
    },
    add_skill_to_freelancer(state, skill){
      if(!state.one_freelancer.skills.find(elm=>elm.id== skill.id)){
        state.one_freelancer.skills.push(skill)
      }
    },
    remove_skills_from_developer(state, id) {
      console.log(state, id);
      state.one_freelancer.skills.splice(state.one_freelancer.skills.findIndex(elm=>elm.id == id), 1)
  },


  }
}
