import Plant from "../models/plant"




const postPlant = async (req, res) => {
    const
        {
            name,
            category,
            image,
            price,
            description
        } = req.body

  
    }

 const newPlant = new Plant({
    name: name ,
    category:category,
    image:image,
    price:price,
    description:description


 })
    const savedPlants = await newPlant.save();

    res.json({
        success: true,
        data: savedPlants,
        message: "plant added successfully",

    })



const getPlants = (req, res) => {
    res.json({
        success: true,
        data: plants,
        message: "plants fetched successfully",
    })
}
 
const getPlantById = (req, res) => {
    const { id } = req.params
    const plant = plants.find((plant) => plant.id === id)
    if (!plant) {
        return res.json({
            success: false,
            data: null,
            message: "plant not found",
        })
    }
    res.json({
        success: true,
        data: plant,
        message: "plant fetched successfully",
    })
}

const deletePlant = (req, res) => {
    const { id } = req.params
    const plantIndex = plants.findIndex((plant) => plant.id === id)
    if (plantIndex === -1) {
        return res.json({
            success: false,
            data: null,
            message: "plant not found",
        })
    }
    plants.splice(plantIndex, 1)
    res.json({
        success: true,
        data: plants,
        message: "plant deleted successfully",
    })
}

const updatePlant = (req, res) => {
    const { id } = req.params
    const { name, category, image, price, description,
    } = req.body
    const plantIndex = plants.findIndex((plant) => plant.id === id)
    if (plantIndex === -1) {
        return res.json({
            success: false,
            data: null,
            message: "plant not found",
        })
    }
    plants[plantIndex] = {
        ...plants[plantIndex], name, category, image,
        price, description
    }
    res.json({
        success: true,
        data: plants,
        message: "plant updated successfully",
    })
}
export {
    postPlant ,
    getPlants ,
    getPlantById ,
    deletePlant , 
    updatePlant
}