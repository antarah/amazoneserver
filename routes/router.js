const express = require("express");
const router = new express.Router();
const products = require("../models/productsSchema");
const USER = require("../models/userSchema");
const bcrypt = require("bcryptjs");
const authenicate = require("../middleware/authenticate");
const BASE_URL = process.env.BASE_URL
 //router.get("/",(req,res)=>{
  //  res.send("this is testing routes");
 //});


// get the products data

router.get('https://amazonwebbackend.onrender.com/getproducts', async (req, res) => {
    try {
        const productsdata = await products.find();
        //console.log(productsdata +  "data is fetched here");
        res.status(201).json(productsdata);
    } catch (error) {
        console.log("error" + error.message);
    }
});



// getindividual

router.get("/getproductsone/:id", async (req, res) => {

    try {
        const { id } = req.params;
        //console.log(id);

        const individual = await products.findOne({ id: id });
        // console.log(individual + "ind mila hai");

        res.status(201).json(individual);
    } catch (error) {
        res.status(400).json(error);
    }
});

// register the data
router.post("https://amazonwebbackend.onrender.com/register", async (req, res) => {
    console.log(req.body);

    const { fname, email, mobile, password, cpassword } = req.body;

    if (!fname || !email || !mobile || !password || !cpassword) {
        res.status(422).json({ error: "fill the all details" });
        console.log("NO data available");
    };


    const preuser = await USER.findOne({ email: email });

    if (preuser) {
        res.status(422).json({ error: "This email is already exist" })
    } else if (password !== cpassword) {
        res.status(422).json({ error: "password are not matching" })
    } else {
        const finaluser = new USER({
            fname, email, mobile, password, cpassword
        });

        //password hashing
        const storedata = await finaluser.save();
        console.log(storedata);

        res.status(201).json(storedata);
    }

});


// login data
router.post("https://amazonwebbackend.onrender.com/login", async (req, res) => {
    // console.log(req.body);
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400).json({ error: "fill the details" });
    };
    try {
        const userlogin = await USER.findOne({ email: email });
        // console.log(userlogin + "user value");

        if (userlogin) {
            const isMatch = await bcrypt.compare(password, userlogin.password);
            // console.log(isMatch);

            if (!isMatch) {
                res.status(400).json({ error: "invalid crediential pass" });
            } else {
                //generate token
                const token = await userlogin.generateAuthtoken();
                //console.log(token);


                res.cookie("Amazonweb", token, {
                    expires: new Date(Date.now() + 1800000),
                    httpOnly: true
                });

                res.status(201).json(userlogin);
            }
        } else {
            res.status(400).json({ error: "invalid crediential" });
        }
    } catch (error) {
        res.status(400).json({ error: "invalid crediential pass" });
        // console.log("error the bhai catch ma for login time" + error.message);
    };


});

// adding the data into cart
router.post("https://amazonwebbackend.onrender.com/addcart/:id", authenicate, async (req, res) => {

    try {
        //console.log("perfect 6");
        const { id } = req.params;
        const cart = await products.findOne({ id: id });
        console.log(cart + "cart value");

        const Usercontact = await USER.findOne({ _id: req.userID });
        console.log(Usercontact + "user value");
        
        if (Usercontact) {
            const cartData = await Usercontact.addcartdata(cart);

            await Usercontact.save();
            console.log(cartData + " thse save wait kr");
            console.log(Usercontact + "usernode save");
            res.status(201).json(Usercontact);
        }else{
            res.status(401).json({error:"invalid user"});
        }
    } catch (error){
        res.status(401).json({error:"invalid user"});
    }
});

// cart details

router.get("https://amazonwebbackend.onrender.com/cartdetails",authenicate, async (req, res) => {
try {
    const buyuser = await USER.findOne({ _id: req.userID });
    console.log(buyuser + "user hain buy pr");
    res.status(201).json(buyuser);
} catch (error) {
    console.log(error + "error for buy now");
}
});



// valid user
router.get("https://amazonwebbackend.onrender.com/validuser",authenicate, async (req, res) => {
    try {
        const validuserone = await USER.findOne({ _id: req.userID });
        //console.log(buyuser + "user hain buy pr");
        res.status(201).json(validuserone);
    } catch (error) {
        console.log(error + "error for valid user");
    }
    });


// remove item from cart
router.delete("https://amazonwebbackend.onrender.com/remove/:id", authenicate, async (req, res) => {
    try {
        const { id } = req.params;

        req.rootUser.carts = req.rootUser.carts.filter((cruval) => {
            return cruval.id != id
        });

        req.rootUser.save();
        res.status(201).json(req.rootUser);
        console.log("iteam remove");

    } catch (error) {
        console.log(error + "jwt provide then remove");
        res.status(400).json(error);
    }
});


//User logout

router.get("https://amazonwebbackend.onrender.com/logout", authenicate, async (req, res) => {
    try {
        req.rootUser.tokens = req.rootUser.tokens.filter((curelem) => {
            return curelem.token !== req.token
        });

        res.clearCookie("Amazonweb", { path: "/" });
        req.rootUser.save();
        res.status(201).json(req.rootUser.tokens);
        console.log("user logout");

    } catch (error) {
        console.log(error + "error for user logout");
    }
});


    module.exports = router;
