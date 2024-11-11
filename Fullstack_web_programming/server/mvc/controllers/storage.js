const createItem = async (req, res) => {

    const { body, file } = req
    
    const fileData = {
    
    filename: file.filename,
    
    url: process.env.PUBLIC_URL+"/"+file.filename
    
    }
    
    const data = await storageModel.create(fileData)
    
    res.send(data)
    
    }

const createUser = async (req, res) => {
    const { body, file } = req;

    const userData = {
        username: body.username,
        email: body.email,
        profilePicture: process.env.PUBLIC_URL + "/" + file.filename
    };

    const data = await userModel.create(userData);

    res.send(data);
};


module.exports = {
    createUser,
    createItem
};
