import express from "express"



const app = express()
app.use(express.json())

const plants =[]

app.post( "/plant", (req,res)=>{
    const 
    {
        name,
         category,
          image,
           price,
            description
        } =req.body
 const randomid= math.round()(math.random()*10000)
 
 const newplant=(
    id = randomid,
    name = name,
    category = category,
    image = image,
    price = price,
    description = description

    )

    plants.push(newplant)

    res.json({
        success: true,
        data: newplant,
        message: "plant added successfully",
      
    })

})

const PORT = 5000

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
})