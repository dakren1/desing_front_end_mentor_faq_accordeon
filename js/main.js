var data = [
    "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan",
    "No more than 2GB. All files in your account must fit your allotted storage space.",
    "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
    "Yes! Send us a message and we’ll process your request no questions asked.",
    "Chat and email support is available 24/7. Phone lines are open during normal business hours."
];

var actual = 0;


function deleteBefore() {
    let list = document.getElementById(actual);
    let element = list.firstElementChild;
    element.firstElementChild.setAttribute("class", "");
    element.lastElementChild.firstElementChild.setAttribute("class", "");
    list.lastElementChild.setAttribute("class", "hide")
}

function openList(actual) {
    let list = document.getElementById(actual);
    let element = list.firstElementChild;
    element.firstElementChild.setAttribute("class", "bold")
    element.lastElementChild.firstElementChild.setAttribute("class", "reverse");
    list.lastElementChild.setAttribute("class", "description")
}

function onClickList(id) {
    if (actual != null) {
        deleteBefore();
    }
    if (actual !== id) {
        openList(id);
        actual = id;
    } else {
        actual = null;
    }
}