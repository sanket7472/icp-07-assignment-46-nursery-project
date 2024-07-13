import express from "express"
import dotenv from "dotenv"
dotenv.config()


const app = express()
app.use(express.json())

const plants = []

app.post("/plant", (req, res) => {
    const
        {
            name,
            category,
            image,
            price,
            description
        } = req.body

    if (!name) {
        return res.json({
            success: true,
            data: null,
            message: "Name is required"
        })
    }
    const randomId = Math.round(Math.random() * 10000)

    const newPlant = (
        id = randomId,
        name = name,
        category = category,
        image = image,
        price = price,
        description = description

    )

    plants.push(newPlant)

    res.json({
        success: true,
        data: newPlant,
        message: "plant added successfully",

    })

})
app.get("/plant", (req, res) => {
    res.json({
        success: true,
        data: plants,
        message: "plants fetched successfully",
    })
})
app.get("/plant/:id", (req, res) => {
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
})
app.delete("/plant/:id", (req, res) => {
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
})
app.put("/plant/:id", (req, res) => {
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
})

app.use("*" , (req,res) =>{
    res.send( `<div>\
        <h1> 404 not found </h1>
        </div>`
    )
})
const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})