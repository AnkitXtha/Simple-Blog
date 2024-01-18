const express = require('express')
const router = express.Router();
const User = require('../models/user')

//Getting all the registered users
router.get('/', async(req, res) => {
    try{
        const user = await User.find();
        if(user.length != 0){
        res.status(200).json(user)
        }else{
            res.status(404).send("No users found!")
        }
    }catch (err) {
        res.status(500).json({message: err.message})
    }
})

//Get one user only
router.get('/:id', getUser, (req, res) => {
    res.send(res.user)
})

//SignUp user
router.post('/register', async(req, res) => {
    const user = new User({
        name: req.body.name,
        nickname: req.body.nickname,
        email: req.body.email,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword,
    })
    try{
        const newUser = await user.save()
        res.status(201).json({newUser, message: 'Registered! Go to Login'})
    } catch(err){
        res.status(400).json({message: err.message})
    }
})

//Login user
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    console.log(req.body)

    try {
        // Check if the user exists in the database
        const existingUser = await User.findOne({email});

        console.log(existingUser);

        if (email === '' && password === '') {
            return res.json({ error: 'Please enter your email and password' });
        } else if (email === '') {
            return res.json({ error: 'Please enter your email' });
        } else if (password === '') {
            return res.json({ error: 'Please enter your password' });
        } 

        if (!existingUser) {
            return res.status(404).json({ error: 'User not found' });
        }


        // Validate the password
        if (existingUser.password !== password) {
            return res.status(401).json({ error: 'Invalid password' });
        }

        const sanitizedUser = {
            _id: existingUser._id,
            email: existingUser.email,
            name: existingUser.name,
            nickname: existingUser.nickname,
            date: existingUser.date
        }

        // If everything is okay, you can send the user data in the response
        res.status(200).json({ user: sanitizedUser, message: 'Login Successful!' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

//Update one user info
router.patch('/:id', getUser, async(req, res) => {
    if(req.body.name != null){
        res.user.name = req.body.name
    }
    if(req.body.email != null){
        res.user.email = req.body.email
    }
    if(req.body.password != null){
        res.user.password = req.body.password
    }
    try {
        const updatedUser = await res.user.save();
        res.status(200).json({updatedUser, message: "Updated successfully!"})
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})

//Delete one user info
router.delete('/:id', getUser, async(req, res) => {
    try {
        await res.user.deleteOne();
        res.status(200).json({message: "Deleted User success"})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})


async function getUser(req, res, next) {
    let user;
    try {
        user = await User.findById(req.params.id)
        if(user == null){
            return res.status(404).json({message: "No user found!"})
        }
    } catch (error) {
        return res.status(500).json({message: error.message})
    }

    res.user = user;

    next();
}

module.exports = router;