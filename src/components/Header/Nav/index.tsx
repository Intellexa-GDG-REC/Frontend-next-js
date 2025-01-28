"use client"
import styles from './style.module.scss';
import { motion } from 'framer-motion';
import { links, footerLinks } from './data';
import { perspective, slideIn } from "./anim";
import { useAuthStore } from '@/lib/auth';

export default function index() {
    const { setUser } = useAuthStore()
    const handleLogout = () => {
        document.cookie = "auth=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
        setUser(null);
    };
    return (
        <div className={styles.nav}>
            <div className={styles.body}>
                {
                    links.map((link, i) => {
                        const { title, href } = link;
                        return (
                            <div key={`b_${i}`} className={styles.linkContainer}>
                                <motion.div
                                    custom={i}
                                    variants={perspective}
                                    initial="initial"
                                    animate="enter"
                                    exit="exit"
                                >
                                    {
                                        title !== "Logout" ? (
                                            <a href={href}>
                                                {title}
                                            </a>
                                        ) : (
                                            <p className='cursor-pointer' onClick={handleLogout}>{title}</p>
                                        )
                                    }
                                </motion.div>
                            </div>
                        )
                    })
                }
            </div>
            {/* <motion.div className={styles.footer}>
                {
                    footerLinks.map((link, i) => {
                        const { title, href } = link;
                        return (
                            <motion.a
                                variants={slideIn}
                                custom={i}
                                initial="initial"
                                animate="enter"
                                exit="exit"
                                key={`f_${i}`}
                            >
                                {title}
                            </motion.a>
                        )
                    })
                }
            </motion.div> */}
        </div>
    )
}