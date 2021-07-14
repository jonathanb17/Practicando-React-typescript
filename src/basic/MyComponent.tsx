import React,{useState,useRef} from "react"
// import ComponentExample from './ComponentExample'

interface User{
    username:string;
    fullname:string;
    age:number;
}


interface MyProps {
    title: string;
    favoriteNumber: number;
    active :boolean;
    sayHello:(name:string)=>string;
    addres:{
        street:string;
        city:string;
    }
    user:User
}
const MyComponent : React.FC<MyProps>= ({title,favoriteNumber,sayHello,addres,user}:MyProps) => {


    const [count, setCount] = useState<number>(0);

    // hacemos una referencia

    const inputRef = useRef(null)

    //cuando pones pones el : al lado pones el tipo 
    const handleInputChange =(e:React.ChangeEvent<HTMLInputElement>)=>{
        console.log(e.target.value)
    }

    return (
        <div>
            <h1>My componenet</h1>
            <h1>{title}</h1>
            <h1>{favoriteNumber}</h1>
            <h1>{sayHello("como estas!!")}</h1>
            <h3>{addres.city}</h3>
            <h2>mi nombr es:+{user.username}</h2>
            <p>{count}</p>
            <button onClick={()=>setCount(count+1)}>Boton</button><br />
            <form action="">
                <input type="text" placeholder="write something" ref={inputRef}  onChange={handleInputChange}/>
            </form>
        </div>
    )
}

export default MyComponent
