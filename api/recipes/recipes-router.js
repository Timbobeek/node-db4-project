const router = require('express').Router()

router.use('*', (req,res)=>{
  res.json({ api: 'working'})
})

router.use((err, req, res, next)=>{ // eslint-disable-line
  res.status(500).json({
    cstmMsg: 'something went wrong ;(',
    msg: err.msg,
    stk: err.stk
  })
})

module.exports = router;