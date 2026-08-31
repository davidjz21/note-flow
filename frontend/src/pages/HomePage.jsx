import { useEffect, useState } from "react"
import { CardNote } from "../components/CardNote"
import axios from "axios"
import formatDate from "../utils/formatDate"

const apiURL = import.meta.env.VITE_API_URL

export const HomePage = () => {
    const [notes, setNotes] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${apiURL}/api/notes`)
                setNotes(response.data)
                setLoading(false)
                console.log(response)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])

    if (loading) return <span>Cargando...</span>
    return (
        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] 
        gap-4 xl:grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
            {notes.map(note => (
                <CardNote
                    key={note._id}
                    title={note.title}
                    description={note.description}
                    id={note._id}
                    date={formatDate(note.createdAt)}
                />
            ))}
        </div>

    )
}
