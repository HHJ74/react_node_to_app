import { MdHome } from "react-icons/md";
import { MdFactCheck } from "react-icons/md";
import { FaClock } from "react-icons/fa6";
import { BsExclamationSquareFill } from "react-icons/bs";


export const navMenus = [
{label:'home', to:'/', icon: <MdHome className="w-6 h-6"/>, idx:1},
{label:'Completed', to:'/completed', icon: <MdFactCheck className="w-5 h-5"/> , idx:2},
{label:'Proceeding', to:'/proceeding', icon:<FaClock className="w-4 h-4"/>, idx:3},
{label:'Important', to:'/important', icon:<BsExclamationSquareFill className="w-4 h-4"/>, idx:4},
]

