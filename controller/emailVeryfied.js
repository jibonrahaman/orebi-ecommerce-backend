function emailVeryfied (req,res){
  const {authorization} =req.headers
  console.log(authorization);
  const decoded = jwt.verify(token, 'shhhhh',)

}
module.exports =emailVeryfied