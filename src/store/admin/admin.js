import VueCookies from 'vue-cookies';
import axios from 'axios';
const Axios = axios.create({
  baseURL: 'http://127.0.0.1:8000/',
});
Axios.interceptors.request.use((config) => {
  console.log("this is config", config);
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
    data: {
      skills: [
        {
          "id": 1,
          "skill": "JavaScript"
        },
        {
          "id": 2,
          "skill": "Python"
        },
        {
          "id": 3,
          "skill": "Java"
        },
        {
          "id": 4,
          "skill": "C#"
        },
        {
          "id": 5,
          "skill": "C++"
        },
        {
          "id": 6,
          "skill": "Ruby"
        },
        {
          "id": 7,
          "skill": "PHP"
        },
        {
          "id": 8,
          "skill": "Swift"
        },
        {
          "id": 9,
          "skill": "Go"
        },
        {
          "id": 10,
          "skill": "Kotlin"
        },
        {
          "id": 11,
          "skill": "TypeScript"
        },
        {
          "id": 12,
          "skill": "SQL"
        },
        {
          "id": 13,
          "skill": "R"
        },
        {
          "id": 14,
          "skill": "HTML & CSS"
        },
        {
          "id": 15,
          "skill": "Rust"
        },
        {
          "id": 16,
          "skill": "Scala"
        },
        {
          "id": 17,
          "skill": "Dart"
        },
        {
          "id": 18,
          "skill": "Shell Scripting"
        },
        {
          "id": 19,
          "skill": "MATLAB"
        },
        {
          "id": 20,
          "skill": "Objective-C"
        }
      ],
      freelancers: []
    },
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


    customers: [
      {
        "id": 1,
        "first_name": "Alice",
        "last_name": "Johnson",
        "email": "alice.johnson@example.com",
        "phone": "+1 (123) 456-7890",
        "image": "https://randomuser.me/api/portraits/women/1.jpg",
      },
      {
        "id": 2,
        "first_name": "Bob",
        "last_name": "Smith",
        "email": "bob.smith@example.com",
        "phone": "+1 (234) 567-8901",
        "country": "USA",
        "image": "https://randomuser.me/api/portraits/men/2.jpg",

      },
      {
        "id": 3,
        "first_name": "Carol",
        "last_name": "Williams",
        "email": "carol.williams@example.com",
        "phone": "+1 (345) 678-9012",
        "image": "https://randomuser.me/api/portraits/women/3.jpg",

      },
      {
        "id": 4,
        "first_name": "David",
        "last_name": "Brown",
        "email": "david.brown@example.com",
        "phone": "+1 (456) 789-0123",
        "image": "https://randomuser.me/api/portraits/men/4.jpg",
      },
      {
        "id": 5,
        "first_name": "Emma",
        "last_name": "Davis",
        "email": "emma.davis@example.com",
        "phone": "+1 (567) 890-1234",
        "image": "https://randomuser.me/api/portraits/women/5.jpg",
      }
    ]


  },
  getters: {
    get_freelancers(state) {
      return state.data.freelancers
    },
    get_customers(state) {
      return state.data.customers
    },
    get_jobs(state) {
      return state.data.jobs
    }
  },
  actions: {
    async req_freelancers({commit}) {

      const  {data}  = await Axios.get("freelancers/")
      console.log(data);
      commit("change_freelancers", data)
    },

    async get_one_freelancer({commit}, id){
      const {data} = await Axios.get(`freelancer/${id}/`)
      console.log("developer", data);
      commit
    }
  },
  mutations: {
    change_freelancers(state, new_value){
      state.data.freelancers = new_value
    }
  }
}
