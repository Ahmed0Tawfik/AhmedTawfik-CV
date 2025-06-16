import { Github, Linkedin, Mail, Phone, ExternalLink } from "lucide-react"

export default function CVPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-light mb-4 tracking-tight">Ahmed Tawfik</h1>
          <div className="flex flex-wrap justify-center items-center gap-6 text-gray-600">
            <a
              href="mailto:ahmedtawfik7581@gmail.com"
              className="flex items-center gap-2 hover:text-blue-600 transition-colors"
            >
              <Mail size={16} />
              ahmedtawfik7581@gmail.com
            </a>
            <a href="tel:+201278722695" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
              <Phone size={16} />
              +(20) 1278722695
            </a>
            <a 
              href="https://www.linkedin.com/in/ahmedd-tawfik/" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-blue-600 transition-colors"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
            <a 
              href="https://github.com/Ahmed0Tawfik" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-blue-600 transition-colors"
            >
              <Github size={16} />
              GitHub
            </a>
          </div>
        </header>

        {/* Education */}
        <section className="mb-12">
          <h2 className="text-2xl font-light mb-6 border-b border-gray-200 pb-2">Education</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-medium">Bachelor of Science in Computer Engineering and Automatic Control</h3>
              <p className="text-gray-600 font-light">2022–2027</p>
              <p className="text-gray-800">Tanta University, Junior</p>
              <p className="text-gray-600">GPA: 3.48</p>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-12">
          <h2 className="text-2xl font-light mb-6 border-b border-gray-200 pb-2">Experience</h2>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-medium">Software Developer Intern</h3>
                <span className="text-gray-600 font-light">Apr 2024 – Dec 2024</span>
              </div>
              <p className="text-gray-800 mb-3">Digital Egypt Pioneers</p>
              <p className="text-gray-700 leading-relaxed">
                Developed a web application using HTML, CSS, JavaScript, C# .NET Core, LINQ, Entity Framework, SQL
                Server, and RESTful API to deliver robust and scalable solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Personal Projects */}
        <section className="mb-12">
          <h2 className="text-2xl font-light mb-6 border-b border-gray-200 pb-2">Personal Projects</h2>
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <h3 className="text-xl font-medium">MyImageService – .NET 9 Image Storage Service</h3>
                <a 
                  href="https://github.com/Ahmed0Tawfik/MyImageService" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <ExternalLink size={16} />
                </a>
              </div>
              <p className="text-gray-700 leading-relaxed">
                A lightweight and efficient .NET 9 package for image storage on the server, providing secure URLs for
                retrieval. Available on NuGet.org as AhmedOTawfik.Services.Images. Enables developers to store,
                retrieve, and manage images efficiently.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <h3 className="text-xl font-medium">Intensive Clean Architecture Template – Minimal APIs</h3>
                <a 
                  href="https://github.com/Ahmed0Tawfik/CleanArchAppAPI-Compact" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <ExternalLink size={16} />
                </a>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Designed a production-ready Clean Architecture template in .NET Core, featuring a custom Mediator Layer
                for efficient communication, Global Exception Handling for uniform API responses, Fluent Validation for
                robust data validation, built-in Identity & JWT Authentication, Serilog logging, API documentation, and
                Rate Limiting for enhanced security.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <h3 className="text-xl font-medium">SupaSafe - Backend Developer & Pull Request Reviewer</h3>
                <a 
                  href="https://github.com/MohannadAK/SupaSafe" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <ExternalLink size={16} />
                </a>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Built and maintained the backend using Node.js, Express.js, and PostgreSQL, ensuring secure
                authentication with JWT, bcrypt, and AES-256 encryption. Reviewed team pull requests to uphold code
                quality and security standards. Designed scalable architecture with Docker and GitHub Actions for CI/CD.
                Project earned recognition from a senior Google engineer and university professor for its robust
                security and user-friendly design.
              </p>
            </div>
          </div>
        </section>

        {/* Upcoming Project */}
        <section className="mb-12">
          <h2 className="text-2xl font-light mb-6 border-b border-gray-200 pb-2">Upcoming Project</h2>
          <p className="text-gray-600 italic">(In Progress) Details to be added upon project completion</p>
        </section>

        {/* Technical Skills */}
        <section className="mb-12">
          <h2 className="text-2xl font-light mb-6 border-b border-gray-200 pb-2">Technical Skills</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-2">Languages</h4>
              <p className="text-gray-700">C#, C++, C, Python, JavaScript</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Databases</h4>
              <p className="text-gray-700">MSSQL, MySQL, PostgreSQL</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Frameworks & Tools</h4>
              <p className="text-gray-700">
                ASP.NET Core, Blazor, Entity Framework, Git, GitHub, NodeJs, Express, React
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Platforms</h4>
              <p className="text-gray-700">MS Windows, Linux</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Methodologies</h4>
              <p className="text-gray-700">SDLC, Data Structures and Algorithms (DSA), Agile (Scrum, Kanban)</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Architectures</h4>
              <p className="text-gray-700">Clean Architecture, N-tier Architecture, Onion Architecture</p>
            </div>
            <div className="md:col-span-2">
              <h4 className="font-medium mb-2">Frontend Technologies</h4>
              <p className="text-gray-700">Light Knowledge of JavaScript, React.js</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-500 text-sm border-t border-gray-200 pt-8">
          <p>© 2024 Ahmed Tawfik. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}
