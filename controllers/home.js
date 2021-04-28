// Need to render the index.ejs file as html for the user.
// Likely need to expand as we need to render more files.
module.exports = {
    getIndex: (req,res)=>{
        res.render('index.ejs')
    }
}