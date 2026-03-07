export const employees = [
  {
    employees: [
      {
        id: 1,
        name: "Rahim",
        email: "employee1@example.com",
        password: "123",

        taskNumbers: {
          active: 1,
          newTask: 2,
          completed: 1,
          failed: 1,
        },

        tasks: [
          {
            title: "Design Login Page",
            description: "Create UI design for login page",
            category: "Design",
            date: "2026-01-10",
            active: true,
            newTask: true,
            completed: false,
            failed: false,
          },
          {
            title: "Fix Navbar Bug",
            description: "Resolve navbar responsiveness issue",
            category: "Bug Fix",
            date: "2026-01-08",
            active: false,
            newTask: false,
            completed: true,
            failed: false,
          },
          {
            title: "Update Documentation",
            description: "Update project README file",
            category: "Documentation",
            date: "2026-01-05",
            active: false,
            newTask: false,
            completed: false,
            failed: true,
          },
        ],
      },

      {
        id: 2,
        name: "Karim",
        email: "employee2@example.com",
        password: "123",

        taskNumbers: {
          active: 2,
          newTask: 1,
          completed: 3,
          failed: 2,
        },

        tasks: [
          {
            title: "API Integration",
            description: "Integrate user authentication API",
            category: "Backend",
            date: "2026-01-12",
            active: true,
            newTask: true,
            completed: false,
            failed: false,
          },
          {
            title: "Form Validation",
            description: "Add client-side form validation",
            category: "Frontend",
            date: "2026-01-09",
            active: false,
            newTask: false,
            completed: true,
            failed: false,
          },
          {
            title: "Error Handling",
            description: "Handle API error responses properly",
            category: "Backend",
            date: "2026-01-06",
            active: false,
            newTask: false,
            completed: false,
            failed: true,
          },
        ],
      },

      {
        id: 3,
        name: "Sahed",
        email: "employee3@example.com",
        password: "123",

        taskNumbers: {
          active: 2,
          newTask: 1,
          completed: 3,
          failed: 2,
        },

        tasks: [
          {
            title: "Database Schema",
            description: "Design database schema",
            category: "Database",
            date: "2026-01-11",
            active: true,
            newTask: true,
            completed: false,
            failed: false,
          },
          {
            title: "Optimize Queries",
            description: "Improve database query performance",
            category: "Database",
            date: "2026-01-07",
            active: false,
            newTask: false,
            completed: true,
            failed: false,
          },
          {
            title: "Backup Setup",
            description: "Configure database backup system",
            category: "DevOps",
            date: "2026-01-04",
            active: false,
            newTask: false,
            completed: false,
            failed: true,
          },
        ],
      },
    ],
  },
];

export const admin = [
  {
    admin: {
      id: 1,
      email: "admin@example.com",
      password: "123",
    },
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};
export const getLocalStarage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  return { employees, admin };
};
