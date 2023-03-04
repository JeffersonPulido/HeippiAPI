const LocalStrategy = require('passport-local').Strategy

const Usuario = require('../app/models/usuario')

module.exports = function (passport){
    passport.serializeUser(function(user, done){
        done(null, user.id)
    })

    passport.desearializeUser(function(id, done){
        Usuario.findById(id, function(err, user){
            done(err, user)
        })
    })

    //REGISTER
    passport.use('Local-signup', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    },
    function(req, email, password, done){
        Usuario.findOne({'local.email': email}, function(err, user){
            if(err){return done(err)}
            if(user){
                return done(null, false, req.flash('signupMessage', 'El email ya existe!'))
            } else {
                var newUser = new Usuario()
                newUser.local.email = email
                newUser.local.password = newUser.generateHash(password)
                newUser.save(function(err){
                    if (err){throw err}
                    return done(null, newUser)
                })
            }
        })
    }))

    //LOGIN
    passport.use('Local-login', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    },
    function(req, email, password, done){
        Usuario.findOne({'local.email': email}, function(err, user){
            if(err){return done(err)}
            if(!user){
                return done(null, false, req.flash('loginMessage', 'El usuario no existe!'))
            }
            if (!user.validatePassword(password)){
                return done(null, false, req.flash('loginMessage', 'Contraseña Incorrecta'))
            }
            return done(null, user)
        })
    }))
}