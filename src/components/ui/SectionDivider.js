import { motion } from "framer-motion"

const SectionDivider = ({ type = "waves", animated = true }) => {
    const renderWaves = () => (
        <div className="w-full h-16 overflow-hidden">
            <motion.svg
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
                className="w-full h-full fill-primary/20"
                animate={animated ? { x: [-20, 20] } : {}}
                transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
            >
                <path
                    d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                    opacity=".25"
                ></path>
                <path
                    d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                    opacity=".5"
                ></path>
                <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
            </motion.svg>
        </div>
    )

    const renderPawPrints = () => (
        <div className="w-full py-8 flex justify-center items-center space-x-8">
            {[...Array(5)].map((_, i) => (
                <motion.div
                    key={i}
                    className="text-4xl text-primary/30"
                    animate={animated ? { scale: [1, 1.2, 1], rotate: [0, 10, 0] } : {}}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2,
                    }}
                >
                    🐾
                </motion.div>
            ))}
        </div>
    )

    const renderRipples = () => (
        <div className="w-full h-24 flex justify-center items-center relative overflow-hidden">
            {[...Array(3)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-32 h-32 border-2 border-primary/20 rounded-full"
                    animate={
                        animated
                            ? {
                                  scale: [0, 2],
                                  opacity: [0.5, 0],
                              }
                            : {}
                    }
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 1,
                    }}
                />
            ))}
        </div>
    )

    const renderTypes = {
        waves: renderWaves,
        pawprints: renderPawPrints,
        ripples: renderRipples,
    }

    return <div className="my-16">{renderTypes[type] ? renderTypes[type]() : renderWaves()}</div>
}

export default SectionDivider
