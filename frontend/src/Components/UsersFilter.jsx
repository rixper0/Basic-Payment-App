import { useState,useEffect, useCallback } from "react";
import { otherUser } from "../store/Atoms/atom";
import { useNavigate } from "react-router-dom";
import {  useSetRecoilState } from "recoil";

export function UserList() {
    const navigate = useNavigate();
    const [userData, setUserData] = useState([]);
    const [word,setWord] = useState("")
    const setName = useSetRecoilState(otherUser);
    
        async function fetchList() {
            const response = await fetch(`http://localhost:3000/api/v1/user/bulk/?filter=${word}`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'credentials' : 'include',
                }
                
            })
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`)
            }
            else {
                const data = await response.json();
                setUserData(data.user);
            }
        }
        useEffect(()=>{
            fetchList().catch(e => console.error(e));
        },[word]);
    

    const handleClick = function ({userId , firstName, lastName}){
        sessionStorage.setItem('userId' , userId);
        setName(firstName + lastName);
        sessionStorage.setItem('fullName', firstName +" "+ lastName);
        navigate("/transactions");
    }

    function userDataFiltered() {
        return userData.filter(user => {
            return user.firstName.toLowerCase().includes(word.toLowerCase()) || user.lastName.toLowerCase().includes(word.toLowerCase());
        });
    }

    
    const usersLists = userData.map(user =>
        <div className="flex justify-between ml-4 mt-4" key={user._id}>
        <div className="flex">
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl">
                    {user.firstName[0]}
                </div>
            </div>
            <div className="flex flex-col justify-center h-full">
                <div>
                    {user.firstName} {user.lastName}
                </div>
            </div>
        </div>

        <div className="flex flex-col justify-center h-full mr-4 mt-2">
            <button className="justify-center rounded-md text-sm font-medium ring-offset-background transition-colors h-10 px-4 py-2 w-full bg-blue-500 text-white" onClick={()=>handleClick({userId : user._id, firstName : user.firstName, lastName : user.lastName})}>Send Money</button>
        </div>
    </div>
    )
    
    return (
        <div>
            
            <div className="my-2 flex justify-center">
                <input className="w-2/3 px-2 py-1 border rounded border-slate-300 rounded-full mt-5" id="filterList" placeholder="Search for users" onChange={(e) => setWord(e.target.value)}/>
            </div>
            <div className="font-bold mt-6 text-lg text-center">Active Users</div>

            <ul>
                {usersLists}
            </ul>
        </div>
    )
}