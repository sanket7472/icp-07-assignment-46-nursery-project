

const getHealth = (req,res) => {
    res.json({
        success: true,
        message: "server is running",
        })
}
const showError = (req,res) =>{
    res.send( `<div>\
        <h1> 404 not found </h1>
        </div>`
    )
}



export {
    getHealth,
    showError
}