let person = {
    "name": "name",
    "img": "img",
    "role": "role",
    "bio": "bio"
}

function load_person(person){
    $('#name').text(person.name);
    $('#img').attr('src', "img/about/people/" + person.img);
    $('#role').text(person.role);
    $('#bio').text(person.bio);
}

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const person_id = urlParams.get('person_id');

// load_person(person);
$(document).ready(function () {
    console.log(person_id);
    if (person_id) {
        $.getJSON('/get_person_by_id?person_id=' + person_id)
            .done(function (data) {
                if (data["message"] === "success") {
                    person = data["data"];
                    load_person(person);
                }
            });
    }
    $.getJSON('/get_current_user').done((data)=>{
        if(data.message === "success"){
            const user=data.data;
            $('.login').remove();
            $('#showname').text(user.fullname);
            console.log(user)
        } else{
            $('.logout').remove();
        }
    })

});
