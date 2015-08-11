$(function() {
    var e = {};
    $(document).on("click", "[data-bb]", function(t) {
        t.preventDefault();
        var n = $(this).data("bb");
        typeof e[n] == "function" && e[n]()
    }), e.alert = function() {
        bootbox.alert("Hello world!");
    }, e.alert_callback = function() {
    	var img = $('#hdreg').val();
        bootbox.dialog("<img src='img/"+img+".png' id='imgPiramide'>", [{
            label: "Cerrar"
        }])
    }, e.confirm = function() {
        bootbox.confirm("Are you sure?", function(e) {
            Example.show("Confirm result: " + e)
        })
    }, e.alert_button = function() {
        bootbox.alert("This alert has custom button text", "So it does!")
    }, e.confirm_buttons = function() {
        bootbox.confirm("This confirm has custom buttons - see?", "No", "Yes!", function(e) {
            e ? Example.show("Well done!") : Example.show("Oh no - try again!")
        })
    }, e.prompt = function() {
        bootbox.prompt("What is your name?", function(e) {
            e === null ? Example.show("Prompt dismissed") : Example.show("Hi <b>" + e + "</b>")
        })
    }, e.dialog = function() {
        bootbox.dialog("I am a custom dialog", [{
            label: "Success!",
            "class": "btn-success",
            callback: function() {
                Example.show("great success")
            }
        }, {
            label: "Danger!",
            "class": "btn-danger",
            callback: function() {
                Example.show("uh oh, look out!")
            }
        }, {
            label: "Click ME!",
            "class": "btn-primary",
            callback: function() {
                Example.show("Primary button")
            }
        }, {
            label: "Just a button..."
        }])
    }
});
var Example = function() {
    var e, t, n = {};
    return n.init = function(t) {
        e = $(t.selector)
    }, n.show = function(r) {
        clearTimeout(t), e.find("span").html(r), e.fadeIn(), t = setTimeout(function() {
            n.hide()
        }, 4e3)
    }, n.hide = function() {
        e.fadeOut()
    }, n
}();
$(function() {
    Example.init({
        selector: ".bb-alert"
    })
});