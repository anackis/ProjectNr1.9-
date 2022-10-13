//jshint esversion: 6


    
exports.getDate = function() {
    var today = new Date();
        var options = {
            weekday: "long",
            day: "numeric",
            month: "long"
        };
        // var day = today.toLocaleDateString("en-US", options);
        // return day;
        return today.toLocaleDateString("en-US", options);
};

exports.getDay = function() {
    let today = new Date();
    return today.toLocaleDateString("en-Us", options);
}