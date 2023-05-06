import { useEffect, useState } from "react"

const useAdmin=email=>{
    // const[isAdmin,setIsAdmin]=useState(false)
    const [type,setType] = useState({})
    useEffect(()=>{
        if(email)
        {
            fetch(`https://used-products-resale-server-bijontalukder.vercel.app/users/role/${email}`)
            .then(res=>res.json())
            .then(data=>{
                // console.log(data)
                setType(data)

                // setIsAdmin(data.isAdmin)
            }
            )
            // console.log('hh',type)
        }
    },[email])
    return [type]
}

export default useAdmin;