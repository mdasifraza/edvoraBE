const Route=require('express').Router()
const Auth= require('./../Auth')
const Signup=require('./../SingleController/Signup')
const Login=require('./../SingleController/Login')
const Faviourate=require('./../SingleController/Faviourate')

Route.post('/signup',Signup.postSignUp)
Route.post('/login',Login.postUserLogin)
Route.get('/getPokemon',Auth,Faviourate.getPokemon)
Route.post('/addPokemon',Auth,Faviourate.AddPokemon)
module.exports=Route