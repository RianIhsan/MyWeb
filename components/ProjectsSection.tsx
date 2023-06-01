import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsGlobe2, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Simple CRUD API",
    description:
      "Create a Create, Read, Update, and Delete User API using Go with the gofiber framework and Mysql database.",
    image: "/excrud.png",
    github: "https://github.com/RianIhsan/goCRUD",
    link: "https://fe-crud-students.vercel.app",
  },
  {
    name: "TODO List API",
    description: "Create Todo list API with Create Todo, Edit Todo, and Complete Todo endpoints using go with gofiber framework and mysql database.",
    image: "/Todo.png",
    github: "https://github.com/RianIhsan/backend-go-todo",
    link: "",
  },
  {
    name: "JWT Authentication",
    description:
      "Creating an Authentication API using JSON WEB TOKEN, with Register, Login, and Logout endpoints, and using Mysql database.",
    image: "/Jwt2.png",
    github: "https://github.com/RianIhsan/goAuthJWT",
    link: "",
  },
    {
    name: "Blogpost API",
    description:
      "Creating a Blogpost API with validation when a user creates an account, there are several endpoints such as getAll Post, Get Post, Delete Post, Upload image, and others. As well as using MySQL as the database.",
    image: "/Post.png",
    github: "https://github.com/RianIhsan/Go-BackendWeb",
    link: "",
  },
  
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsGlobe2
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection
