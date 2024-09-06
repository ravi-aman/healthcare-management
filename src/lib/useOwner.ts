import { db } from "../../firebase"
import { useUser } from "@clerk/nextjs"
import { useRoom } from "@liveblocks/react/suspense"
import { useEffect, useState } from "react"
import { useCollection } from "react-firebase-hooks/firestore"
import { collection, query, where } from "firebase/firestore"



function useOwner() {
    const { user } = useUser();
    const room = useRoom()
    const [IsOwner, setIsOwner] = useState(false)
    const userInRoom = useCollection(
        user && query(
            collection(db, "room"), where("roomId", "==", room.id))
    );
    useEffect(() => {
        if (userInRoom?.docs && userInRoom.docs.length>0) { 
            const owner =userInRoom.docs.filter()
        }
    }



    return (
        3
    )
}
``
export default useOwner
