const test = (req, resp) => {
    return (
        <div>
            {resp.json("Test is working")}
        </div>
    )
}

module.exports = {
    test
}