import { motion } from "framer-motion"

const LoreTimeline = ({ events }) => {
    return (
        <div className="relative py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                        The Realm's <span className="text-gradient">History</span>
                    </h2>
                    <p className="text-lg text-muted-foreground">Key events that shaped our world</p>
                </div>

                {/* Desktop Timeline */}
                <div className="hidden md:block relative">
                    {/* Timeline line */}
                    <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary transform -translate-y-1/2"></div>

                    <div className="flex justify-between items-center relative">
                        {events.map((event, index) => (
                            <motion.div
                                key={index}
                                className="relative flex flex-col items-center group cursor-pointer"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                {/* Event marker */}
                                <motion.div
                                    className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary border-4 border-background shadow-lg flex items-center justify-center text-2xl relative z-10"
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    {event.icon}
                                </motion.div>

                                {/* Event card */}
                                <motion.div
                                    className={`absolute ${
                                        index % 2 === 0 ? "top-20" : "bottom-20"
                                    } w-64 p-4 bg-card border border-border rounded-2xl shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-300`}
                                    initial={{ y: index % 2 === 0 ? -10 : 10 }}
                                    whileHover={{ y: 0 }}
                                >
                                    <h4 className="font-bold text-foreground mb-2">{event.title}</h4>
                                    <p className="text-sm text-muted-foreground">{event.description}</p>
                                    {event.date && (
                                        <div className="text-xs text-primary font-semibold mt-2">{event.date}</div>
                                    )}
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Mobile Timeline */}
                <div className="md:hidden space-y-8">
                    {events.map((event, index) => (
                        <motion.div
                            key={index}
                            className="flex gap-4 items-start"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-xl flex-shrink-0">
                                {event.icon}
                            </div>
                            <div className="flex-1 bg-card p-4 rounded-2xl border border-border">
                                <h4 className="font-bold text-foreground mb-2">{event.title}</h4>
                                <p className="text-sm text-muted-foreground mb-2">{event.description}</p>
                                {event.date && <div className="text-xs text-primary font-semibold">{event.date}</div>}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default LoreTimeline
