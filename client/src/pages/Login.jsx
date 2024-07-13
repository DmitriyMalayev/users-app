import { useState } from "react"

export default function Login() {
    const [data, setData] = useState({
        email: "", 
        password: ""
    })

    const loginUser = (e) => {
        e.preventDefault()
    }

    return (
        <div>
            <form style={{ display: "flex", flexDirection: "column", width: "100%", padding: "30px", margin: "10px" }} onSubmit={handleSubmit} >
                <label>Email Address</label>
                <input type="email" placeholder="Email" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />

                <label>Password</label>
                <input type="password" placeholder="Password" value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} />
                <button type="submit" style={{ margin: "10px 0px 10px" }}>Submit</button>
            </form>
        </div>
    )
}