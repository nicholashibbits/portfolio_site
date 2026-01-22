"use client"

import React from "react"
import {
    motion,
    useScroll,
    useTransform,
} from "motion/react"
import { useRef } from "react"
import Image from "next/image"

function useParallax(value, distance) {
    return useTransform(value, [0, 1], [-distance, distance])
}

function ImageWithText() {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({ target: ref })
    const y = useParallax(scrollYProgress, 220)

    return (
        <section className="img-container">
            <div ref={ref}>
                <Image
                    src="/orange-headshot.jpg"
                    alt="Nick Hibbits"
                    width={500}
                    height={500}
                    className="about-image"
                />
            </div>
            <motion.h2
                // Hide until scroll progress is measured
                initial={{ visibility: "hidden" }}
                animate={{ visibility: "visible" }}
                style={{ y }}
            >Web Engineer</motion.h2>
        </section>
    )
}

export default function About() {

    return (
        <div id="about">
                <ImageWithText />
        </div>
    )
}