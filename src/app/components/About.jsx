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
    const y = useParallax(scrollYProgress, 320)
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3])

    return (
        <section className="img-container container">
            <div ref={ref}>
                <Image
                    src="/orange-headshot.jpg"
                    alt="Nick Hibbits"
                    width={600}
                    height={1000}
                    className="about-image"
                />
            </div>
            <motion.div
                // Hide until scroll progress is measured
                initial={{ visibility: "hidden" }}
                animate={{ visibility: "visible" }}
                style={{ y, opacity }}
                className="about-text"
            >
               <h2>Web Engineer</h2>
               <p>Create and steward web-based ecosystems</p>
               <ul>
               <li>- Experienced with both code-based and low/no-code website building solutions.</li>
               <li>- Maintained and contributed to enterprise-level codebases in both startup and corporate environments.</li>
               <li>- Adaptive systems thinker who loves a slick UI.</li>
                </ul>
              
              </motion.div>
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