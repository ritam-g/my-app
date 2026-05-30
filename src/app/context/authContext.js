'use client'
import { api } from "@/lib/api";
import { createContext, useContext, useEffect, useState } from "react";

const Auth = createContext()


const ContextProvier = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const hydration = async () => {
        try {
            setLoading(true)
            const res = await api.get('/api/auth/me')

            setUser(res.data.user)
            console.log(res.data, "diffrent", user, loading)
        } catch (error) {
            setUser(null)
            console.log(error)
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        hydration()
    }, [])
    return (
        <Auth.Provider value={{ user, loading }}> {children} </Auth.Provider>
    )
}
export const useAuth = () => useContext(Auth)
export default ContextProvier