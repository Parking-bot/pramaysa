const puppeteer = require('puppeteer');
const nodemailer = require('nodemailer');



const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {user: 'lvrolavo@gmail.com', pass:'vtlphzrztanrzkuq'},
})




console.log('Bem vindo ao Bot da lana del rey 🤖💰');


robo();

setInterval(function(){ 
   
  robo();

}, 20000)

async function robo() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  const link = "https://www.instagram.com/honeymoon/";
  await page.goto(link);
  await delay(10000);

  var resultado = await page.evaluate(() => {
    return document.getElementsByClassName('_aa_u').length;
  });


  if(resultado == 1){
    resultado = "privado";
  }else{
    resultado = "Aberto";

   /* transporter.sendMail({
      from: 'Maysa bot <lvrolavo@gmail.com>',
      to: 'jdapicio@gmail.com',
      subject: 'Lana del rey para Maysa - Abriu o perfil!!!!',
      text: 'Ela abriu o perfil corre lá seguir https://www.instagram.com/honeymoon/ '
    
    }).then(() => console.log('Email enviado sucesso'))
    .catch((err) => console.log('Erro deu errado', err));*/

  }

  console.log(`O perfil é ${resultado}`);

 await browser.close();


 function delay(time) {
  return new Promise(function(resolve){
    setTimeout(resolve, time)
  });
 }
}





