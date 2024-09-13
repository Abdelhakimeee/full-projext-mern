import bcrypt from "bcrypt";


export const register = async (req, res)=>{
    const {user, email, password} = req.body;
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10)

    console.log(hashedPassword)
    res.send(hashedPassword)
}

export const login = (req, res)=>{
    console.log("register endpoint")
    res.send("register Controller works")
}

export const logout = (req, res)=>{
    console.log("register endpoint")
    res.send("register Controller works")
}