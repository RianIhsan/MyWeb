
"use client" // this is a client component
import React from "react"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { RiMoonFill, RiSunLine } from "react-icons/ri"
import { IoMdMenu, IoMdClose } from "react-icons/io"

interface NavItem {
  label: string
  page: string
  external?: boolean
  link?: string
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    page: "home",
  },
  {
    label: "About",
    page: "about",
  },
  {
    label: "Projects",
    page: "projects",
  },
  {
    label: "Download CV",
    external: true,
    link: "https://drive.google.com/file/d/1sYsbQQTrrfZG7D15MQCtg-tVKg-s2qrX/view",
  },
]

export default function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === "system" ? systemTheme : theme
  const pathname = usePathname()
  const [navbar, setNavbar] = useState(false)

  const handleNavItemClick = (page: string, external?: boolean, link?: string) => {
    if (external && link) {
      // Open the CV link in a new tab
      window.open(link, "_blank")
    } else {
      // Handle other navigation clicks
      // You can add your logic here
    }
  }

  return (
    <header className="w-full mx-auto  px-4 sm:px-20 fixed top-0 z-50 shadow bg-white dark:bg-stone-900 dark:border-b dark:border-stone-600">
      <div className="justify-between md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <div className="container flex items-center space-x-2">
              <h2 className="text-2xl font-bold">YonDev</h2>
            </div>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
              </button>
            </div>
          </div>
        </div>

        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              {NAV_ITEMS.map((item, idx) => {
                if (item.external && item.link) {
                  return (
                    <a
                      key={idx}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={
                        "block lg:inline-block text-neutral-900  hover:text-neutral-500 dark:text-neutral-100"
                      }
                      onClick={() => handleNavItemClick(item.page, item.external, item.link)}
                    >
                      {item.label}
                    </a>
                  )
                } else {
                  return (
                    <a
                      key={idx}
                      href={`#${item.page}`}
                      className={
                        "block lg:inline-block text-neutral-900  hover:text-neutral-500 dark:text-neutral-100"
                      }
                      onClick={() => handleNavItemClick(item.page)}
                    >
                      {item.label}
                    </a>
                  )
                }
              })}
              {currentTheme === "dark" ? (
                <button
                  onClick={() => setTheme("light")}
                  className="bg-slate-100 p-2 rounded-xl"
                >
                  <RiSunLine size={25} color="black" />
                </button>
              ) : (
                <button
                  onClick={() => setTheme("dark")}
                  className="bg-slate-100 p-2 rounded-xl"
                >
                  <RiMoonFill size={25} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
