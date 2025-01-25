'use client'
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

export const Navbar = () => {
    const [isNavbarActive, setIsNavbarActive] = useState(false)

    const navVariants = {
        hidden: {
            height: 0,
            opacity: 0,
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        },
        visible: {
            height: "100vh",
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeInOut"
            }
        }
    }

    const menuItemVariants = {
        hidden: { 
            opacity: 0, 
            y: 20 
        },
        visible: (custom: any) => ({ 
            opacity: 1, 
            y: 0,
            transition: {
                delay: custom * 0.1,
                duration: 0.5
            }
        })
    }

    const menuItems = [
        { label: "Home", href: "#" },
        { label: "Leaderboard", href: "/leaderboard" },
        { label: "Rules", href: "#" }
    ]

    return (
        <>
            <div className="md:block hidden fixed w-screen bg-black z-50">
                <motion.nav 
                    className="flex justify-between py-4 border-b border-white/10 lg:px-[3%] items-center overflow-x-hidden z-10"
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeInOut", type: "spring", damping: 10, delay: 0.1 }}
                    initial={{ y: -20, opacity: 0 }}
                >
                    <div>Logo</div>
                    <div className="flex space-x-8 items-center">
                        {menuItems.map((item) => (
                            <a 
                                key={item.label} 
                                href={item.href} 
                                className="hover:text-green-400"
                            >
                                {item.label}
                            </a>
                        ))}
                        <motion.button 
                            className="cursor-pointer bg-gradient-to-b from-green-400 to-green-500 px-5 py-2 text-black flex items-center space-x-2 rounded-xl duration-300 hover:drop-shadow-[0_16px_24px_rgba(34,197,94,0.35)]"
                            whileHover={{ y: -1 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ ease: "easeInOut", type: "spring", damping: 10 }}
                        >
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 64 64">
                                    <path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6z"></path>
                                </svg>
                            </span>
                            <span>Sign in</span>
                        </motion.button>
                    </div>
                </motion.nav>
            </div>

            <div className="md:hidden block h-[70px] fixed top-0 left-0 border-b border-white/10 w-full px-5 bg-[#0a0a0a] z-50">
                <nav className="h-full flex items-center justify-between">
                    <div>Logo</div>
                    <div className="flex items-center space-x-3">
                        <motion.button 
                            className="cursor-pointer bg-gradient-to-b from-green-400 to-green-500 px-5 py-2 text-black flex items-center space-x-2 rounded-xl duration-300"
                            whileHover={{ y: -1 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ ease: "easeInOut", type: "spring", damping: 10 }}
                        >
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 64 64">
                                    <path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6z"></path>
                                </svg>
                            </span>
                            <span>Sign in</span>
                        </motion.button>
                        <motion.button 
                            className="bg-gradient-to-b from-green-400 to-green-500 rounded-xl px-3 py-2 cursor-pointer z-50 text-black text-center"
                            onClick={() => setIsNavbarActive((prev) => !prev)}
                            whileTap={{ scale: 0.9 }}
                        >
                            {isNavbarActive ? "Close" : "Menu"}
                        </motion.button>
                    </div>

                    <AnimatePresence>
                        {isNavbarActive && (
                            <motion.div
                                key="mobile-menu"
                                variants={navVariants}
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center space-y-8"
                            >
                                {menuItems.map((item, index) => (
                                    <motion.a
                                        key={item.label}
                                        href={item.href}
                                        variants={menuItemVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="hidden"
                                        custom={index}
                                        className="text-white text-2xl"
                                    >
                                        {item.label}
                                    </motion.a>
                                ))}
                                <motion.button
                                    variants={menuItemVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="hidden"
                                    custom={menuItems.length}
                                    className="bg-green-400 px-6 py-3 rounded-xl text-black text-xl flex items-center space-x-2"
                                >
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 64 64">
                                            <path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6z"></path>
                                        </svg>
                                    </span>
                                    <span>Sign in</span>
                                </motion.button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </nav>
            </div>
        </>
    )
}