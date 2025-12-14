import usersDaos from "../daos/users.daos.js";

const usersControllers = {};

usersControllers.getAll = (req, res) => {
    usersDaos.getAll()
    .then((users)=>{
        res.json({
            data:users
        });
    })
    .catch((error)=>{
        res.status(500).json({
            message: "An error occurred",
            error:error
        })
    });
};

usersControllers.getOne = (req, res) => {
    usersDaos.getOne(req.params.user_id)
    .then((user)=>{
         if(user){
        res.json({
            data: user
        });
       } else {
        res.status(404).json({
            message: "User not found"
        });
       }
    })
    .catch((error) =>{
        res.status(500).json({
            message: error.message
            
        });
    });
}

usersControllers.insertOne = (req,res) => {
    usersDaos.insertOne (req.body)
    .then((newUser) => {
        res.status(201).json({
            message: "User created succefull",
            data: newUser

        });
    })
    .catch((error) => {
        res.status(500).json({
            message: error.message
        });
    });
}

usersControllers.updateOne = (req, res) => {
    usersDaos.updateOne(req.params.user_id, req.body)
    .then((updatedUser) => {
        if (updatedUser) {
            res.json({
                message: "User updated successfully",
                data: updatedUser

            });
        } else {
            res.status(404).json({
                message: "User not found"
            });
        }
    })
    .catch((error) => {
        res.status(500).json({
            message: error.message
        });
    });
}


usersControllers.deleteOne = (req, res) => {
    usersDaos.deleteOne(req.params.user_id)
    .then((deletedUser) => {
        if (deletedUser) {
           res.json({
                message: "User deleted successfully",
                data: deletedUser
           });
        } else {
            res.status(404).json({
                message: "User not found"
            });
        }
    })
    .catch((error) => {
        res.status(500).json({
            message: error.message
        });
    });
}

usersControllers.login = (req, res) => {
    const { email, password } = req.body; // Recibimos datos del body

    usersDaos.login(email, password)
        .then((user) => {
            if (user) {
                
                res.json({
                    message: "Login exitoso",
                    data: user
                });
            } else {
                
                res.status(401).json({
                    message: "Credenciales incorrectas"
                });
            }
        })
        .catch((error) => {
            res.status(500).json({ message: error.message });
        });
};
    
export default usersControllers;