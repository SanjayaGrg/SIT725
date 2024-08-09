const MyProjectList = [
    {
        title: 'Gurug Delivery',
        image: "images/image/gurug.png",
        link: 'https://play.google.com/store/apps/details?id=com.beccodelivery',
        description: 'The project is about users need to fill the KYC information to accept the orders. The users receive orders from admin and can accept or decline the orders. Need to load money from the Khalti digital wallet as only can be accept the orders. And withdraw the earned money. Based on Nepal.'
    },
    {
        title: 'Foocery Delivery',
        image: "images/image/foocery.png",
        link: 'https://play.google.com/store/apps/details?id=com.foocerydelivery&hl=en',
        description: 'The project is about the delivery app with map integrations. The users need to fill the KYC information to accept the orders. The users receive orders from the merchant or from admin and can accept or decline the orders. Need to load money from the stripe as only can be accept the orders. And withdraw the earned money.'
    },
    {
        title: 'Classi Leads Customer',
        image: "images/image/classiLeads.png",
        link: 'https://play.google.com/store/apps/details?id=com.classileads&hl=en_au',
        description: 'The project is about adding a enquiry with the required services like plumbing, repairing, and so on. Then chat with the applied companies and select one to hire. You can view company details and chat and enquire about the company with reviews.'
    },
]

const addProjects = (items) => {
    items.forEach(item => {
        let itemToAppend = `<div class="col s12 m6 l4">
        <div class="card card-con">
                        <div class="card-image waves-effect waves-block waves-light">
                            <img src=${item?.image} alt="img" class="activator">
                        </div>
                        <div class="card-content">
                            <span class="card-title activator grey-text text-darken-4"><i
                                    class="material-icons right">more_vert</i></span>
                            <p><a href="#">${item?.title}</a></p>
                        </div>
                        <div class="card-reveal">
                            <span class="card-title grey-text text-darken-4">Description<i
                                    class="material-icons right">close</i></span>
                            <p class="card-text">${item?.description}</p>
                            <p><a class="indigo-text" href=${item?.link}>Go to App</a></p>
                        </div>
                        </div>
                    </div>`;
        $("#projectCards").append(itemToAppend)
    });
};

function postEnquiry(enquiry) {
    $.ajax({
        url: '/api/enquire',
        type: 'POST',
        data: enquiry,
        success: (result) => {
            if (result?.statusCode === 201) {
                alert('Enquiry Submitted Successfully');
            }
        }
    });
}

function postProject(project) {
    $.ajax({
        url: '/api/project',
        type: 'POST',
        data: project,
        success: (result) => {
            if (result?.statusCode === 201) {
                console.log('Project Submitted Successfully');
            }
        }
    });
}

const enquirySubmit = () => {
    let formData = {};
    formData.firstName = $('#first_name').val();
    formData.lastName = $('#last_name').val();
    formData.email = $('#email').val();
    formData.message = $('#message').val();

    console.log("Enquiry Data", formData);
    postEnquiry(formData);
    // alert("Your enquiry has been sent successfully!");
}

const projectForm = () => {
    let formData = {};
    formData.title = $('#title').val(),
        formData.image = $('#image').val(),
        formData.link = $('#link').val(),
        formData.description = $('#description').val(),

        console.log("Projects Data", formData);
    postProject(formData);
    // alert("Your enquiry has been sent successfully!");
}

function getAllProjects() {
    $.get('/api/projects', (response) => {
        if (response.statusCode === 200) {
            addProjects(response.data);
        }
    });
}

function getAllEnquiries() {
    $.get('/api/enquiries', (response) => {
        // response's data is in array format, so we can use it
        if (response.statusCode === 200) {
            // addCards(response.data);
            console.log('Get Enquiries: ', response?.data);
        }
    });
}

$(document).ready(function () {
    $('.materialboxed').materialbox();
    $('#submitEnquire').click(() => {
        enquirySubmit();
    });
    $('#addProject').click(() => {
        projectForm();
    });
    $('.modal').modal();
    getAllProjects();
    getAllEnquiries();
});