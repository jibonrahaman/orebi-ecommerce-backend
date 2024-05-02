function emailVeryfiedTemplete(token){
  return  `<div><img alt=""src=https://i.ibb.co/qdqTcby/OREBI.png style=margin-left:50px;margin-top:30px><p style=font-weight:700;font-size:20px;color:teal>Please Verify Your Email</p><button style=padding:10px;border-radius:10px;background-color:#000;color:#fff;font-weight:700;font-size:15px;margin-left:35px>
  <a href = "http://localhost:7000/api/v1/authentication/emailVerification/${token}"> Confim Verify </a></button></div>`

}
module.exports =emailVeryfiedTemplete;