(function () {

    function postCommand(cmd, body) {
        console.log(cmd, body)
        const opts = {
            url: "beaver/" + cmd,
            type: "POST",
            error: function (jqXHR, textStatus, errorThrown) {
                console.log(jqXHR, textStatus, errorThrown);
            }
        }
        if (body) {
            opts.contentType = "application/json";
            opts.data = JSON.stringify(body);
        }
        $.ajax(opts);
    }

    console.log("Beaver plugin added");
})();