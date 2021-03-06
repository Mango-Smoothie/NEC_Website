function get_work_object(work) {
    return `<div class="row work" data-w="${work._id}">
                <div class="col-3">
                    <img src="img/about/work/${work.img}" alt="" style="width: 100%">
                </div>
                <div class="col-9">
                    <h4>${work.title}</h4>
                    <p>${work.description.slice(0, 500)}...</p>
                    <button type="button" class="btn btn-light detail-btn learn_more_btn" value='${JSON.stringify(work)}' style="background-color: #b08968; font-size: 17px; margin-bottom: 10px">Learn more</button>
                </div>
            </div>`
}

function get_public_object(work) {
    return `<div class="row work" data-w="${work._id}">
                <h4>${work.title}</h4>
                <p>${work.description.slice(0, 500)}...</p>
                <button type="button" class="btn btn-light public-detail-btn learn_more_btn" value='${JSON.stringify(work)}' style="background-color: #b08968; width: 7rem; font-size: 17px; margin-left: 10px; margin-bottom: 10px">Learn more</button>
            </div>`
}

let work_arr =[]
$.get('/get_all_works')
    .done(function (data) {
        if (data.message === "success") {
            work_arr = data.data;
            spotlight = work_arr.slice(0,6);
            public_programs = work_arr.slice(6,8);
            public_lectures = work_arr.slice(8,12);
            readers = work_arr.slice(12,13)
            showSpotlight(spotlight);
            showPublicPrograms(public_programs);
            showPublicLectures(public_lectures);
            showReaders(readers);
        }
    });

function showSpotlight(spotlight) {
    $("#spotlight").empty();
    spotlight.forEach((work, idx) => {
        $('#spotlight').append(get_work_object(work));
    });

    $('.learn_more_btn').on('click', function(){
        const work_id = $(this).parents('.work').attr('data-w');
        console.log(work_id);
        location.href = "our_work_detail.html?work_id=" + work_id;
    });
}

function showPublicPrograms(public_programs) {
    $("#public_programs").empty();
    public_programs.forEach((work, idx) => {
        $('#public_programs').append(get_public_object(work));
    });

    $('.learn_more_btn').on('click', function(){
        const work_id = $(this).parents('.work').attr('data-w');
        console.log(work_id);
        location.href = "our_work_detail.html?work_id=" + work_id;
    });
}

function showPublicLectures(public_lectures) {
    $("#public_lectures").empty();
    public_lectures.forEach((work, idx) => {
        $('#public_lectures').append(get_public_object(work));
    });

    $('.learn_more_btn').on('click', function(){
        const work_id = $(this).parents('.work').attr('data-w');
        console.log(work_id);
        location.href = "our_work_detail.html?work_id=" + work_id;
    });
}

function showReaders(readers) {
    $("#readers").empty();
    readers.forEach((work, idx) => {
        $('#readers').append(get_public_object(work));
    });

    $('.learn_more_btn').on('click', function(){
        const work_id = $(this).parents('.work').attr('data-w');
        console.log(work_id);
        location.href = "our_work_detail.html?work_id=" + work_id;
    });
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