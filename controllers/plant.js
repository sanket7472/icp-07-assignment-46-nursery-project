import Plant from "./../models/Plant.js";


const postPlant = async (req, res) => {
    const {
        plantname,
        category,
        image,
        price,
        description
    } = req.body

    const newPlant = new Plant({
        plantname: plantname,
        category: category,
        image: image,
        price: price,
        description: description
    });

    const savedPlant = await newPlant.save();


    res.json({
        success: true,
        data: savedPlant,
        message: "plant added successfully",
    });
}

const getPlants = async(req, res) => {

    const allPlants = await Plant.find()
    res.json({
        success: true,
        data: allPlants,
        message: "plants fetched successfully",
    });
}

const getPlantById = async (req, res) => {
    const { id } = req.params;
    const plant = await Plant.findById ( id )
    if (!plant) {
        return res.json({
            success: false,
            data: null,
            message: "plant not found",
        });
    }
    res.json({
        success: true,
        data: plant,
        message: "plant fetched successfully",
    });
}

const deletePlant = async (req, res) => {
    const { id } = req.params;
  await Plant.deleteOne({
    _id: id
   })
    res.json({
        success: true,
        data: null,
        message: "plant deleted successfully",
    });
}

const updatePlant = async (req, res) => {
    const { id } = req.params;
    const {
         plantname, 
         category, 
         image, 
         price,
         description } = req.body;

 const updateResult = await Plant.updateOne ({id:id},
    {
        $set: {
            plantname: plantname,
            category: category,
            image: image,
            price: price,
            description: description
    }
}
 )
 const updatedPlant = Plant.findById (id)
 
        return res.json({
            success: false,
            data: null,
            message: "plant not found",
        });
    
   
    res.json({
        success: true,
        data: updatedPlant,
        message: "plant updated successfully",
    });
}

export {
    postPlant,
    getPlants,
    getPlantById,
    deletePlant,
    updatePlant
}



