const fs = require("fs");

const fileName = "users.json";

const postRegisterUserM = (params) => {
    let data = fs.readFileSync(fileName, "utf-8");
    const users = JSON.parse(data);    
     
    users.push(params);

    data = JSON.stringify(users);
    fs.writeFileSync(fileName, data);
            
    return true;
}

const postLoginUserM = (params) => {
    const data = fs.readFileSync(fileName, "utf-8");
    const users = JSON.parse(data);

    for(let i = 0; i < users.length; i++)
    {
        if(users[i].login == params.login)
        {
            if(users[i].password == params.password)
                return true;
            else
                return false;
        }
        else
            return false;        
    }
}

const postCheckRoleM = (params) => {
    
    if(params.role == "Admin")
        return true
    else
        return false;        
    
}

module.exports = {postRegisterUserM, postLoginUserM, postCheckRoleM};