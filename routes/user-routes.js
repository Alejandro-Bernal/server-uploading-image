const router = require('express').Router();
const cloudinary = require('../utils/cloudinary-connect');
const upload = require('../utils/multer-config');
const User = require('../models/user');

router.post('/upload-single-image', upload.single("image"), async (req, res) => {
    try {
        // upload image to cloudinary
        const result = await cloudinary.uploader.upload(req.file.path);
        // create a user
        let user = new User({
            name: req.body.name,
            avatar: req.body.secure_url,
            cloudinary_id: result.public_id
        });
        
        // save user
        // await user.save();
        res.json(result);
    } catch(err) {
        console.log(err);
    }
});

router.get("/get-user", async (req, res) => {
    try {
      let user = await User.find();
      res.json(user);
      console.log(user)
    } catch (err) {
      console.log(err);
    }});

module.exports = router;