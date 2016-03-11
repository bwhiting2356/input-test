function validate_input(e) {
    var this_input = e.target;
    var message_div = document.getElementById('message');
    var message_text = "You just blurred input number {number}";
    message_div.innerHTML = message_text.replace("{number}", this_input.id);
}


window.onload = function() {
    var one = document.getElementById("1");
    var two = document.getElementById("2");
    var three = document.getElementById("3");
    var four = document.getElementById("4");
    var all_inputs = [one, two, three, four];
    for (var i = 0; i < all_inputs.length; i++) {
        all_inputs[i].onblur = validate_input;
    }
};