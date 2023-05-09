const checkName = (req, res, next) => {
    if (req.body.name) {
      next()
    } else {
      res.status(400).json({ error: "Game title is required" });
    }
  };
  
  
  const checkBoolean = (req, res, next) => {
    const { is_favorite } = req.body;
    if (
      multiplayer == "true" ||
      multiplayer == "false" ||
      multiplayer == undefined
    ) {
      next();
    } else {
      res.status(400).json({ error: "multiplayer must be a boolean value" });
    }
  };
  
  module.exports = { checkBoolean, checkName};