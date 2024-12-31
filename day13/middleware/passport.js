// const passport = require("passport");
// const localSt = require("passport-local");

// let adminSchema = require("../module/loguser");

// passport.use(
// 	"local",
// 	new localSt({ usernameField: "email" }, async (email, password, done) => {
// 	let user = await adminSchema.findOne({ email: email });
// 	if (user) {
// 		if (user.password == password) {
// 			return done(null, user);
// 		}	else {
// 			return done(null, false);
// 		}
// 	} else { 
// 		return done(null, false);
// 	}
//      })
// );

// passport.serializeUser((user, done) => {
// 	return done(null, user.id);
// });

// passport.deserializeUser(async (userId, done) => {
// 	let user = await adminSchema.findById(userId);
//     done(null, user)
// });






const passport = require("passport");
const LocalStrategy = require("passport-local");

let adminSchema = require("../module/loguser");

passport.use(
    "local",
    new LocalStrategy({usernameField: "email"},async(email,password,done)=>{
        let user = await adminSchema.findOne({email:email});
        if (user) {
            if (user.password == password) {
                return done(null,user);
            }else{
                return done(null,false);
            }a
        }else{
            return done(null,false);
        }
    })
);

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (userId, done) => {
    let user = await adminSchema.findById(userId);
    done(null,user);
});

passport.checkAuth = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    } else {
        res.redirect("/");
    }
};





// const passport = require("passport");
// const localSt = require("passport-local");

// let firstSchema = require("../module/loguser");


// passport.use(
//     "local",
//     new localSt({usernameField: "email"},async(email,password,done)=>{
//         let user = await firstSchema.findOne({email:email});
//         if (user) {
//             if (user.password == password) {
//                 return done(null,user);
//             }else{
//                 return done(null,false);
//             }a
//         }else{
//             return done(null,false);
//         }
//     })
// );

// passport.serializeUser((user ,done)=>{
//     return done(null,user.id);
// });

// passport.deserializeUser(async(userId,done)=>{
//     let user = await firstSchema.findById(userId);
//     done(null,user);
// });

// passport.checkAuth = (req , res ,next)=>{
//     if(req.isAuthenticated()){
//         next();
//     }
//     res.redirect("/");
// };  