import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsGlobe2, } from "react-icons/bs"

const projects = [
  {
    name: "HackerRank | Golang Challenge",
    description: "HackerRank is a platform for competitive programming and coding challenges. This repository contains solutions to various HackerRank challenges using Golang. The challenges cover a wide range of topics, including algorithms, data structures, and more.",
    image: "/hck.png",
    github: "https://github.com/RianIhsan/HackerRank-Golang",
    link: ""
  },
  {
    name: "YoPay | E-Wallet",
    description: "YoPay is a digital wallet application that allows users to make transactions, transfer money, and manage their finances easily and securely. The application is built using Golang technology, ensuring high performance and reliability.",
    image: "/ypay2.png",
    github: "https://github.com/RianIhsan/go-ewallet-yopay",
    link: ""
  },
  {
    name: "Ulinan | Ticket booking system",
    description: "The tourism ticket booking system is built using Golang technology. This application is designed to provide efficient and secure tourism ticket booking services.",
    image: "/Ulinan.png",
    github: "https://github.com/RianIhsan/go-backend-ulinan",
    link: "https://ulinan-fe.vercel.app/"
  },
  {
    name: "Disappear | e commerce",
    description: "Ecommerce API with Golang, Echo, MySql, Docker, Payment Gateway, and Redis.",
    image: "/Screenshot from 2023-12-13 19-46-05.png",
    github: "https://github.com/capstone-kelompok-7/backend-disappear",
    link: "https://frontend-disappear.vercel.app"
  },
  {
    name: "RaiseUnity | Crowdfunding API",
    description: "Crowdfunding API with Golang, Gin, MySql, Docker, Payment Gateway",
    image: "/1.jpg",
    github: "https://github.com/RianIhsan/raise-unity",
    link: ""
  },
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
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-sky-500 border-0 rounded"></hr>
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
