function emailVerificationTemplate (token){
    return `<div><img alt=""src=https://i.ibb.co/TvkZsG3/logo.png style=width:100px><h1 style=font-family:Arial,Helvetica,sans-serif;font-size:24px;color:#6495ed>Welcome to OREBI E-Commerce Website</h1><p style=font-family:Arial,Helvetica,sans-serif;font-size:18px>Please, verify your email!</p><button style="font-family:Arial,Helvetica,sans-serif;font-size:24px;color:#f5f5f5;background:#000;padding:10px 20px">Confirm Your Email</button></div>${token}`;
}

module.exports = emailVerificationTemplate;