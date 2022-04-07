async function session(req, res) {
    if (req.user)
      res.json({
        login: true,
        admin: req.user.admin,
        nickName: req.user.nickName,
        score: req.user.score
      });
      else res.json({ login: false });
  }
  
  
  module.exports = {
    session
  };