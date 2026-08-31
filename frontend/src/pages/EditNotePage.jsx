import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { toast } from "react-toastify"

export const EditNotePage = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [initialData, setInitialData] = useState({
        title: "",
        description: "",
    })

    useEffect(() => {
        axios.get(`${apiURL}/api/notes/${id}`).then((res) => {
            setInitialData({
                title: res.data.title,
                description: res.data.description,
            })
        })
    }, [id])

    const handleUpdate = async (note) => {
        await axios.put(`${apiURL}/api/notes/${id}`, note).then((res) => {
            if (res.status === 200) {
                toast.success("Nota actualizada con exito", {
                    position: "bottom-right",
                    autoClose: 3000,
                    theme: "colored",
                })
                navigate("/")
            } else {
                toast.error("Error al actualizar la nota", {
                    position: "bottom-right",
                    autoClose: 3000,
                    theme: "colored",
                })
            }
        })
    }


    return (
        <div>
            <h1 className="text-5xl font-bold text-center mb-8">Editar nota</h1>
            <NoteForm initialData={initialData} onSubmit={handleUpdate} />
        </div>
    )
}
