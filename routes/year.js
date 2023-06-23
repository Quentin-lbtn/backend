router.get('/',  (req, res) => {
    const date = new Date();
    res.json({ now: date });
   });
  
  module.exports = router;