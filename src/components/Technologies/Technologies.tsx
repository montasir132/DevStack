import { use, useState } from "react";
import { toast } from 'react-toastify'
import type { ITechnology } from '../types/technologyType'
import YourStack from './YourStack'
import TechCard from './techCard'
interface ITechnologiesProps{
    technologiesPromise:Promise<ITechnology[]>
}
const Technologies = ({technologiesPromise} : ITechnologiesProps) => { 
    const technologies = use(technologiesPromise)
    // console.log(technologies);
    const [stack, setStack] = useState<ITechnology[]>([])

    const addToStack = (tech: ITechnology) => {
        if (stack.some((item) => item.id === tech.id)) {
            toast.warn(`${tech.name} is already in your stack!`)
            return
        }
        setStack([...stack, tech])
        toast.success(`${tech.name} added to your stack!`)
    }

    const removeFromStack = (id: string) => {
        const removed = stack.find((tech) => tech.id === id)
        if (!removed) return
        setStack(stack.filter((tech) => tech.id !== id))
        toast.info(`${removed.name} removed from your stack`)
    }

    const removeAll = () => {
        setStack([])
        toast.info('Your stack has been cleared')
    }

    return (
        <section id="technologies" className="mx-auto max-w-7xl px-4 pb-20">
            <h2 className=" text-2xl lg:text-4xl font-extrabold text-[#0F172A]">
                Explore the <span className="bg-linear-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">Technologies</span>
            </h2>
            <p className="mt-2 text-slate-600">
                Pick one technology per category to build your ideal stack.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-4">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-3 xl:grid-cols-3">
                    {
                        technologies.map((tech:ITechnology) => {
                            return(
                                <TechCard key = {tech.id} tech = {tech} isInStack = {stack.some((item) => item.id === tech.id)} onAdd = {addToStack}/>
                            )
                        })
                    }
                </div>
                <YourStack stack = {stack} onRemove = {removeFromStack} onRemoveAll = {removeAll} />
            </div>
        </section>
    );
};

export default Technologies;
