var userService = require('./userService');




var getDataControllerfn = async(req,res) =>{
    var empDetails = await userService.getDataFromDBService();
    res.send({"status": true, "data": empDetails});

}

var createUserControllerfn = async(req,res) =>{
 
   try{
         var status = await userService.createUserDBService(req.body);
     
            if(status){
                res.send({"status": true, "message": "User created successfully"});
            
            }
    }catch(error) {
               
                res.send({"status": false, "message": "Error creating user"});
            }
}
var updateUserDataControllerfn = async(req,res) =>{
     try{
        var status = await userService.updateUserDBService(req.params.id, req.body);
      
           if(status){
               res.send({"status": true, "message": "User updated  successfully"});
           
           }
        }catch(error) {
            
               res.send({"status": false, "message": "Error updating user"});
           }

}

var deleteUserDataControllerfn = async(req,res) =>{
  
    try{
        var status = await userService.deleteUserDBService(req.params.id);
   
           if(status){
               res.send({"status": true, "message": "User deleted  successfully"});
        
           }
        }catch(error) {
            
               res.send({"status": false, "message": "Error deleting user"});
           }
    
}
module.exports ={getDataControllerfn, createUserControllerfn,updateUserDataControllerfn,deleteUserDataControllerfn}