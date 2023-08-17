function CheckCourse() {
    selectElement = document.querySelector('#course');
     output = selectElement.value;
    //  document.querySelector('.output').textContent = output;
    // window.location.replace("../download_pages/ai_course.html");

    if(output == 'not_sel')
    {
        alert("Please Select a Cource");
    }
    else if(output == 'ai')
    {
        window.location.replace("../download_pages/ai_course.html");
    }
    else if(output == 'ml')
    {
        window.location.replace("../download_pages/ml_course.html");
    }
    else if(output == 'da')
    {
        window.location.replace("../download_pages/data_ana_course.html");
    }
    else if(output == 'bt')
    {
        window.location.replace("../download_pages/blockchain_course.html");
    }
    else if(output == 'app')
    {
        window.location.replace("../download_pages/app_course.html");
    }
    else if(output == 'hck')
    {
        window.location.replace("../download_pages/ethical_hacking_course.html");
    }
    else{
        document.write("errorr");
    }
}