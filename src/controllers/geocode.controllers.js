import geocodingServices from "../services/geocode.services.js";
const geocodingControllers = {};

geocodingControllers.getLatlng = (req, res) => {
    geocodingServices.getLatlng(req.params.destination, req.params.API_KEY)
        .then((data) => {
            //condicion ? siEsVerdadero : siEsFalso;
            if (data != null && data.status == "OK") {
                let latlng = data.results[0].geometry.location;
                res.json({
                    latlng: latlng,
                    status : "OK"
                });
            } else {
                res.status(404).json({
                    data: { message: "Destination not found 😔" }
                });
            }
        })
        .catch((err) => {
            res.status(500).json({
                message: "An error has ocurred NooOoo",
                error: err
            });
        });
};

export default geocodingControllers;