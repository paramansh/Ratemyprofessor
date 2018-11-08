const Professor = require('../models/Prof');

exports.index = (req, res) => {
    query = req.query.q;
    // should be name in place of id!! TODO
    Professor.find({'profile.name': new RegExp('[a-z]*'+query+'[a-z]*', "i")}, (err, professors) => {
        if (err){
            console.log("Errors");
            res.send("No Suggetions");
        }
        else {
            response = "";
            cnt = 0;
            NUM_DISPLAY_RESULTS = 3;
            professors.some((prof) => {
                cnt++;
                // response+= prof.profile.name;
                //ideally link should be id!
                response += "<a href=/professor/"+ prof.id + " >" + prof.profile.name + "</a>";
                response+= "<br>";
                return cnt >= NUM_DISPLAY_RESULTS;
            })
            if (cnt) {
                console.log(response)
                res.send(response);
            }
                
            else
                res.send("No Suggetions");
        }
    })
};
