console.log($('input[name=radioName]:checked', '#myForm').val())

function UpdateInvolved() {
    const checked = $("input:checked").val();
    console.log(checked)
    $("#involvedText").empty()
    $("#involvedImg").empty()
    fillInfo(checked)


}

function fillInfo(choice) {
    if (choice === "students") {
        $("#involvedImg").append("<img class=\"img-fluid\" src=\"img/home/getInvolvedStudents.jpg\">")
        $("#involvedText").append("<p>\n" +
            "                As a Clark student, you bring a passion for deep inquiry and thoughtful\n" +
            "                innovation to engaging the major challenges of our time. Through A new Earth\n" +
            "                conversation, we offer a space of community, creativity and reflection to fuel\n" +
            "                our work as we collectively grapple with the climate crisis.\n" +
            "            </p>\n" +
            "            <p>\n" +
            "                As you deepen into your studies here at Clark, we hope you will explore the many\n" +
            "                offerings of NEC and find inspiration in our transformative climate initiative.\n" +
            "            </p>"
        )
    } else if (choice === "faculty") {
        $("#involvedImg").append("<img class=\"img-fluid\" src=\"img/home/getInvolvedFaculty.jpg\">")

        $("#involvedText").append("<p>\n" +
            "A new Earth conversation grew out of deep faculty engagement, which is still its foundation.\n" +
            " As this initiative evolves and spreads across campus, we invite you to join us to explore how\n" +
            " it might augment and expand the possibilities of your own work and thinking – in the classroom,\n" +
            " in your research and beyond.\n" +
            "</p>\n" +
            "<p>Join with a vibrant community of colleagues and find out how\n" +
            " you can become involved in A new Earth conversation:\n" +
            "</p>")

    } else if (choice === "partners") {
        $("#involvedImg").append("<img class=\"img-fluid\" src=\"img/home/getInvolvedPartners.jpg\">")

        $("#involvedText").append("<p>At Clark University, our work through NEC has grown out of deep faculty\n" +
            " dialogue and years of intentional relationship building within our academic community. We\n" +
            " see it as critical to all of our work in higher education in this unprecedented time.\n" +
            "</p>\n" +
            "<p>If you are interested in learning more about this initiative – its history, impact and\n" +
            " trajectory – we would love to speak with you.\n" +
            "</p>")
    }
}

$(document).ready(()=>{
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
})