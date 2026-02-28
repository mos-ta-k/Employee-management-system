export const employees = [
  {
    employees: [
      {
        id: 1,
        email: "employee1@example.com",
        password: "123",
        tasks: [
          {
            title: "Design Login Page",
            description: "Create UI design for login page",
            category: "Design",
            date: "2026-01-10",
            active: true,
            newTask: true,
            completed: false,
            failed: false
          },
          {
            title: "Fix Navbar Bug",
            description: "Resolve navbar responsiveness issue",
            category: "Bug Fix",
            date: "2026-01-08",
            active: false,
            newTask: false,
            completed: true,
            failed: false
          },
          {
            title: "Update Documentation",
            description: "Update project README file",
            category: "Documentation",
            date: "2026-01-05",
            active: false,
            newTask: false,
            completed: false,
            failed: true
          }
        ]
      },
      {
        id: 2,
        email: "employee2@example.com",
        password: "123",
        tasks: [
          {
            title: "API Integration",
            description: "Integrate user authentication API",
            category: "Backend",
            date: "2026-01-12",
            active: true,
            newTask: true,
            completed: false,
            failed: false
          },
          {
            title: "Form Validation",
            description: "Add client-side form validation",
            category: "Frontend",
            date: "2026-01-09",
            active: false,
            newTask: false,
            completed: true,
            failed: false
          },
          {
            title: "Error Handling",
            description: "Handle API error responses properly",
            category: "Backend",
            date: "2026-01-06",
            active: false,
            newTask: false,
            completed: false,
            failed: true
          }
        ]
      },
      {
        id: 3,
        email: "employee3@example.com",
        password: "123",
        tasks: [
          {
            title: "Database Schema",
            description: "Design database schema",
            category: "Database",
            date: "2026-01-11",
            active: true,
            newTask: true,
            completed: false,
            failed: false
          },
          {
            title: "Optimize Queries",
            description: "Improve database query performance",
            category: "Database",
            date: "2026-01-07",
            active: false,
            newTask: false,
            completed: true,
            failed: false
          },
          {
            title: "Backup Setup",
            description: "Configure database backup system",
            category: "DevOps",
            date: "2026-01-04",
            active: false,
            newTask: false,
            completed: false,
            failed: true
          }
        ]
      },
      {
        id: 4,
        email: "employee4@example.com",
        password: "123",
        tasks: [
          {
            title: "UI Improvements",
            description: "Improve dashboard UI",
            category: "UI/UX",
            date: "2026-01-13",
            active: true,
            newTask: true,
            completed: false,
            failed: false
          },
          {
            title: "Cross Browser Testing",
            description: "Test app on multiple browsers",
            category: "Testing",
            date: "2026-01-09",
            active: false,
            newTask: false,
            completed: true,
            failed: false
          },
          {
            title: "Accessibility Fixes",
            description: "Fix accessibility issues",
            category: "UI/UX",
            date: "2026-01-06",
            active: false,
            newTask: false,
            completed: false,
            failed: true
          }
        ]
      },
      {
        id: 5,
        email: "employee5@example.com",
        password: "123",
        tasks: [
          {
            title: "Deploy Application",
            description: "Deploy app to production server",
            category: "DevOps",
            date: "2026-01-14",
            active: true,
            newTask: true,
            completed: false,
            failed: false
          },
          {
            title: "Monitor Logs",
            description: "Monitor application logs",
            category: "Maintenance",
            date: "2026-01-10",
            active: false,
            newTask: false,
            completed: true,
            failed: false
          },
          {
            title: "Security Audit",
            description: "Perform basic security audit",
            category: "Security",
            date: "2026-01-07",
            active: false,
            newTask: false,
            completed: false,
            failed: true
          }
        ]
      }
    ]
  }
];

export const admin = [{
  admin: {
    id: 1,
    email: "admin@example.com",
    password: "123"
  }
}];


export const setLocalStorage = () =>{
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}
export const getLocalStarage = () =>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    
    console.log(employees);
    console.log(admin)
    
}