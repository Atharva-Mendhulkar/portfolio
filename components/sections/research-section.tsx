"use client"

import React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, FileText } from "lucide-react"
import Link from "next/link"

const researchItems = [
    {
        id: 1,
        title: "Physics-Informed Neural Networks for Air Quality Modeling (Delhi PM2.5)",
        description: "A Physics-Informed Neural Network (PINN) for modeling PM2.5 concentrations in the Delhi NCR by combining sparse sensor data with atmospheric advection–diffusion physics and meteorological inputs to ensure physically consistent predictions and source discovery.",
        results: "Achieved R² = 0.78, RMSE = 36.7 μg/m³, and MAE = 28.3 μg/m³ on unseen validation data, while accurately identifying persistent pollution hotspots across the region.",
        tags: ["PINN", "Physics-Informed ML", "Air Quality", "Deep Learning", "Atmospheric Physics"],
        paper: null,
        github: null,
    },
    {
        id: 2,
        title: "Temporal Graph Neural Networks with Budget-Constrained Repair for Dynamic Graph Colouring",
        description: "A temporal graph neural network (GCN + GRU) framework for dynamic graph colouring that learns stable colour assignments over time while enforcing feasibility through a strict budget-constrained local repair mechanism, balancing conflicts, recolouring churn, and real-time latency.",
        results: "Across dynamic Erdős–Rényi, Barabási–Albert, and Watts–Strogatz graphs (50–200 nodes), the method achieves near-zero recolours (≈ 2 per timestep) with lower latency than DSATUR, while small repair budgets (3–5 fixes) recover up to 19% conflict reduction, revealing a clear speed–accuracy–stability trade-off.",
        tags: ["Graph Neural Networks", "Temporal GNN", "Dynamic Graphs", "Graph Colouring", "Local Repair"],
        paper: "https://zenodo.org/records/17678546",
        github: "https://github.com/Atharva-Mendhulkar/TGNN",
    },
]

export default function ResearchSection() {
    return (
        <div id="research" className="pt-20">
            <section className="py-16 px-4 bg-muted/30">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Research</h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Exploring the intersection of physics, graphs, and deep learning.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8">
                        {researchItems.map((item) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <Card className="bg-card/50 backdrop-blur-sm border shadow-sm overflow-hidden flex flex-col md:flex-row">
                                    <div className="flex-grow">
                                        <CardHeader>
                                            <CardTitle className="text-2xl">{item.title}</CardTitle>
                                            <CardDescription className="text-base mt-2">{item.description}</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="mb-4">
                                                <h4 className="font-semibold mb-2">Results:</h4>
                                                <p className="text-muted-foreground">{item.results}</p>
                                            </div>
                                            <div className="flex flex-wrap gap-2">
                                                {item.tags.map((tag) => (
                                                    <Badge key={tag} variant="secondary" className="bg-secondary/50">
                                                        {tag}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </CardContent>
                                        {(item.github || item.paper) && (
                                            <CardFooter className="flex gap-4">
                                                {item.paper && (
                                                    <Button size="sm" asChild>
                                                        <Link href={item.paper} target="_blank" rel="noopener noreferrer">
                                                            <FileText className="mr-2 h-4 w-4" />
                                                            Paper
                                                        </Link>
                                                    </Button>
                                                )}
                                                {item.github && (
                                                    <Button variant="outline" size="sm" asChild>
                                                        <Link href={item.github} target="_blank" rel="noopener noreferrer">
                                                            <Github className="mr-2 h-4 w-4" />
                                                            GitHub
                                                        </Link>
                                                    </Button>
                                                )}
                                            </CardFooter>
                                        )}
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
