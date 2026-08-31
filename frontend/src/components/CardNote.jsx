import { SquarePen, Trash } from 'lucide-react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import axios from "axios"
import DeleteConfirmationModal from "./DeleteConfirmationModal"

export const CardNote = ({ title, description, date, id, onDelete }) => {
    const navigate = useNavigate()
    const [showConfirmModal, setShowConfirmModal] = useState(false)

    const deleteNote = async () => {
        try {
            //Eliminando nota de BD
            await axios
                .delete(`${import.meta.env.VITE_API_URL}/api/notes/${id}`)
                .then((res) => {
                    if (res.status !== 200) {
                        throw new Error("Error al eliminar nota")
                    }

                    toast.success("Nota eliminada con exito", {
                        position: "bottom-right",
                        autoClose: 3000,
                        theme: "colored",
                    })

                    if (onDelete) onDelete(id)

                    setShowConfirmModal(false)
                })
        } catch (error) {
            console.log(error)
            toast.error("Error al eliminar nota", {
                position: "bottom-right",
                autoClose: 3000,
                theme: "colored",
            })
        }
    }
    return (
        <>
            <div className="card bg-base-100 w-full">
                <div className="card-body">
                    <h2 className="card-title text-accent lg:text-2xl">{title}</h2>
                    <p className="text-amber-50">{description}</p>
                    <div className="flex justify-between items-center mt-6">
                        <time dateTime={date}>{date}</time>
                        <div className="flex gap-4">
                            <SquarePen
                                className="text-white cursor-pointer"
                                onClick={() => navigate(`/editNote/${id}`)}>
                            </SquarePen>
                            <Trash
                                className="text-white cursor-pointer"
                                onClick={() => setShowConfirmModal(true)}
                            ></Trash>
                        </div>
                    </div>
                </div>
            </div>
            {showConfirmModal && (
                <DeleteConfirmationModal
                    title={title}
                    deleteNote={deleteNote}
                    setShowConfirmModal={setShowConfirmModal}
                />
            )}
        </>
    )
}