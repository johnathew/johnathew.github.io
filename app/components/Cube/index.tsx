import reactIcon from "../../assets/react.svg"
import { motion, useAnimationFrame } from "framer-motion"
import { useRef } from "react"

export default function RotatingCube() {
    const cubeRef = useRef<HTMLDivElement>(null)

    useAnimationFrame((t) => {
        if (cubeRef.current) {
            cubeRef.current.style.transform = `rotateX(${t / 100}deg) rotateY(${t / 100}deg)`
        }
    })

    return (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" aria-label="Rotating 3D cube">
            <motion.div
                className="w-20 h-20 transform-style-preserve-3d"
                ref={cubeRef}
            >
                {/* Cube sides */}
                {["front", "right", "back", "left", "top", "bottom"].map((side) => (
                    <div key={side} className={`side ${side} flex w-full justify-center h-full items-center`} role="img" aria-label={`Cube side ${side}`}>
                        <img src={reactIcon} alt="React logo" className="h-10 w-auto" />
                    </div>
                ))}
            </motion.div>
        </div>
    )
}
