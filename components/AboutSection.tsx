import React from "react"
import Image from "next/image"

const skills = [
  { 
    skill: "Golang" 
  },
  {
    skill: "Linux"
  },
  {
    skill: "gRPC"
  },
  {
    skill: "REST API"
  },
  {
    skill: "Microservice"
  },
  {
    skill: "PubSub"
  },
  {
    skill: "Apache Kafka"
  },
  {
    skill: "RabbitMQ"
  },
  {
    skill: "SQL/NoSQL"
  },
  {
    skill: "Unit Testing"
  },
  {
    skill: "Caching"
  },
  {
    skill: "Docker"
  }
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-sky-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Yon and I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> Backend Developer
              based in Bandung, West Java.
            </p>
            <br />
            <p>
            I'm a backend developer specializing in Golang with 1 year of experience. I have expertise in creating REST APIs, working with databases like MySQL and PostgreSQL, and proficiency in Docker, Linux, and other backend skills. Additionally, I am skilled in gRPC, Microservice architecture, Redis, and Pub/Sub systems.
            </p>
            <br />
            <p>
            I excel in developing robust RESTful APIs and microservices that serve as the foundation of scalable web applications. I prioritize clean code, scalability, and efficient API design to ensure optimal performance. With my knowledge of gRPC and microservices, I can build distributed systems that facilitate smooth communication between services, ensuring flexibility and maintainability.
            </p>
            <br />
            <p>
            I am well-versed in Redis for efficient caching solutions and Pub/Sub systems for message-driven architectures, enabling real-time data processing and ensuring high scalability. My containerization expertise using Docker allows for easy deployment and management of services, and my proficiency in Linux helps me optimize server-side operations for enhanced performance.
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            <Image
              src="/ThisMe.JPG"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-[-105px] md:left-10 md:z-0 rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
