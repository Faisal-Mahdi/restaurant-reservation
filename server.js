// import app from "app.js"

// app.listen(process.env.PORT, () => {
//     console.log(`Server running on port ${process.env.PORT}`)
// })

import app from "./app.js";

app.listen(process.env.PORT, ()=>{
    console.log(`SERVER HAS STARTED AT PORT ${process.env.PORT}`);
})