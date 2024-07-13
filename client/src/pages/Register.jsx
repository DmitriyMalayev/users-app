import { useState } from "react"

export default function Register() {
    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div>
            <form style={{ display: "flex", flexDirection: "column", width: "100%", padding: "30px", margin: "10px" }} onSubmit={handleSubmit} >
                <label>Name</label>
                <input type="text" value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} placeholder="Name" />

                <label>Email Address</label>
                <input type="email" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} placeholder="Email" />

                <label>Password</label>
                <input type="password" placeholder="Password" value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} />
                <button type="submit" style={{ margin: "10px 0px 10px" }}>Submit</button>
            </form>
        </div>
    )
}