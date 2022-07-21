const notfound = (req,res) => {
    res.status(404).send("Router is not exist!")
}

module.exports = notfound;