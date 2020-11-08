var mail = require("nodemailer").mail;
mail({
    from:"noreply@yss.com",
    to: "patelaryan7751@gmail.com",
    subject:"hello",
    text: "hello world"
    
});
