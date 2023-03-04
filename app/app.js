const express = require('express')
const bodyParser = require('body-parser')

const App = express();

const path = require('path')
const mongoose = require('mongoose')
const passport = require('passport')
const flash = require('connect-flash')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const session = require('express-session')

require('../login/config/passport', passport)

App.use(bodyParser.json())
App.use(bodyParser.urlencoded({extended: false}))
App.set('views', path.join(__dirname, '../login/views'))
App.set('view engine', 'ejs')
App.use(morgan('dev'))
App.use(cookieParser())
App.use(session({
    secret: 'heippi',
    resave: false,
    saveUninitialized: false
}))
App.use(passport.initialize())
App.use(passport.session())
App.use(flash())

//Archivos statics
App.use(express.static(path.join(__dirname, '../login/public')))

//Ruta para Index
const Index = require('../login/app/routes/routes')
App.use('/index', Index)

//Ruta para LogIn
const Login = require('../login/app/routes/loginRoute')
App.use('/login', Login)

//Ruta para SignUp
const SignUp = require('../login/app/routes/signupRoute')
App.use('/signup', SignUp)

//Ruta para profile
const Profile = require('../login/app/routes/profileRoute')
App.use('/profile', Profile)

//Ruta para la API
const User = require('./routes/user')
App.use('/user', User)

module.exports = App