
function sendAPI(req, res){

    res.json({
        woopsIForgotToDocumentAllMyEndpoints: false, // CHANGE ME ;)
        message: "Welcome to Album api",
        documentationUrl: "https://github.com/Sherwin32/tunely", 
        baseUrl: "heroku", // CHANGE ME
        endpoints: [{
                method: "GET",
                path: "/api",
                description: "Describes all available endpoints"
            },//CHANGE ME
            {
                method: "GET",
                path: "/api/profile",
                description: "A brief description about me"
            }, // CHANGE ME
            {
                method: "POST",
                path: "/api/campsites",
                description: "E.g. Create a new campsite"
            } // CHANGE ME
        ]
    })}


module.exports = {
    sendAPI: sendAPI
}