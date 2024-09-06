const UserServices = require('../services/User.servicess');

const userRouter = require('express').Router();

userRouter.get('/', async (req, res) => {
  try {
    const users = await UserServices.getAllUsers();
    res.status(200).json({message: 'success', users})
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

userRouter.get('/:id', async (req, res) => {
    try {
        const {id} = req.params
        const user = await UserServices.getUserId(id)
        res.status(200).json({message: 'success', user})
    } catch ({message}) {
        res.status(500).json({error: message})
    }
})

module.exports = userRouter;
