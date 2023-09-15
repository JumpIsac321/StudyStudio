express = require("express")
app = express()
expressEjsLayouts = require("express-ejs-layouts")

publicDir = __dirname + '/public'

app.use(express.static(publicDir))


app.listen(process.env.PORT || 3000)