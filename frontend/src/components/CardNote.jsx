import { SquarePen, Trash } from 'lucide-react'

export const CardNote = ({ title, description, date }) => {
    return (
        <div className="card bg-base-100 w-full">
            <div className="card-body">
                <h2 className="card-title text-accent lg:text-2xl">{title}</h2>
                <p className="text-amber-50">{description}</p>
                <div className="flex justify-between items-center mt-6">
                    <time datetime={date}>{date}</time>
                    <div className="flex gap-4">
                        <SquarePen className="text-white cursor-pointer"></SquarePen>
                        <Trash className="text-white cursor-pointer"></Trash>
                    </div>
                </div>
            </div>
        </div>
    )
}
