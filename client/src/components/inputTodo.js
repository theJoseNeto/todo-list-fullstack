import { useState } from "react"

const InputTodo = () => {
    const [description, setDescription] = useState("teste")

    const onSubmitForm = async (e) => {
        e.preventDefault();
        const body = { description }
        const response = await fetch("http://localhost:3333/todo", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(body)
        }); 
        console.log(response);
        
    }
    return <>

        <h1 className="text-center mt-05">Input todo</h1>
        <form className="d-flex mt-5" onSubmit={onSubmitForm}>
            <input type="text" className="form-control" value={description} onChange={e => {
                setDescription(e.target.value)
            }} />
            <button className="btn btn-success">Add</button>
        </form>
    </>
};

export default InputTodo