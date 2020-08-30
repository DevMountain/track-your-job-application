const bcrypt = require('bcryptjs');

module.exports = {
    login: async (req, res) => {
        const db = req.app.get('db');
        const {email, password} = req.body;
        //------------------
    // if (email === "test" && password === "test") {
    //     res.status(200).send({ email: "test", user_id: 0, first_name: "test", last_name: "test" });
    //   }
      //------------------
      
        const [foundUser] = await db.user.check_user(email); 
        if(foundUser){
            const authenticated = bcrypt.compareSync(password, foundUser.password)
            if(authenticated){
                //Check on this. 
                // delete foundUser.password;
                req.session.user = foundUser;
                return res.status(202).send(foundUser);
            } else {
                res.status(401).send("Email or password is incorrect.")
            }
        } else {
            res.status(401).send("Email or password is incorrect.")   
        }
    },
    register: async (req, res) => {
        const db = req.app.get('db');
        const {email, password, firstName, lastName} = req.body;
        const [existingUser] = await db.user.check_user(email);
        if(existingUser){
            return res.status(409).send("User already exists.")
        } else {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        const [newUser] = await db.user.add_user([email, hash, firstName, lastName])
        req.session.user = newUser;
        return res.status(201).send(newUser);
        }
    },
    logout: (req, res) => {
        req.session.destroy();
        res.sendStatus(200);
    },
    getUser: (req, res) => {
    if (req.session.user) {
        res.status(200).send(req.session.user);
        } else {
        res.sendStatus(404);
        }
    }
}
