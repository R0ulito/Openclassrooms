/**
 * Created by Touliro on 24/01/2017.
 */
function insertAfter(newElement, afterElement) {
    var parent = afterElement.parentNode

    if (parent.lastChild === afterElement) {
        parent.appendChild(newElement);
    } else {
        parent.insertBefore(newElement, afterElement.nextSibling);
    }
}

/* In a game lost before its start. I'm a lone player