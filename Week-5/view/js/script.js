// // import { profile } from "./image";

// const clickMe = () => {
//     alert("Thanks for clicking me. Hope you have a nice day!")
// }

// const MyProjectList = [
//     {
//         title: 'Gurug Delivery',
//         image: "images/image/gurug.png",
//         link: 'https://play.google.com/store/apps/details?id=com.beccodelivery',
//         description: 'The project is about users need to fill the KYC information to accept the orders. The users receive orders from admin and can accept or decline the orders. Need to load money from the Khalti digital wallet as only can be accept the orders. And withdraw the earned money. Based on Nepal.'
//     },
//     {
//         title: 'Foocery Delivery',
//         image: "images/image/foocery.png",
//         link: 'https://play.google.com/store/apps/details?id=com.foocerydelivery&hl=en',
//         description: 'The project is about the delivery app with map integrations. The users need to fill the KYC information to accept the orders. The users receive orders from the merchant or from admin and can accept or decline the orders. Need to load money from the stripe as only can be accept the orders. And withdraw the earned money.'
//     },
//     {
//         title: 'Classi Leads Customer',
//         image: "images/image/classiLeads.png",
//         link: 'https://play.google.com/store/apps/details?id=com.classileads&hl=en_au',
//         description: 'The project is about adding a enquiry with the required services like plumbing, repairing, and so on. Then chat with the applied companies and select one to hire. You can view company details and chat and enquire about the company with reviews.'
//     },
// ]

// const mappingData = () => {
//     const cardContainer = document.getElementById('projectCards');

//     const cardsHTML = MyProjectList.map((item) => (
//         `
//         <div class="col s12 m6 l4">
//         <div class="card card-con">
//                         <div class="card-image waves-effect waves-block waves-light">
//                             <img src=${item?.image} alt="img" class="activator">
//                         </div>
//                         <div class="card-content">
//                             <span class="card-title activator grey-text text-darken-4"><i
//                                     class="material-icons right">more_vert</i></span>
//                             <p><a href="#">${item?.title}</a></p>
//                         </div>
//                         <div class="card-reveal">
//                             <span class="card-title grey-text text-darken-4">Description<i
//                                     class="material-icons right">close</i></span>
//                             <p class="card-text">${item?.description}</p>
//                             <p><a class="indigo-text" href=${item?.link}>Go to App</a></p>
//                         </div>
//                         </div>
//                     </div>`
//     )).join('');
//     // console.log(cardsHTML, 'showing cards html for testing')
//     cardContainer.innerHTML = cardsHTML;
// };

// const enquirySubmit = () => {
//     let formData = {};
//     formData.firstName = $('#first_name').val();
//     formData.lastName = $('#last_name').val();
//     formData.email = $('#email').val();
//     formData.message = $('#message').val();

//     console.log("Enquiry Data", formData);
//     alert("Your enquiry has been sent successfully!");
// }

// $(document).ready(function () {
//     mappingData();
//     console.log("HELLO");
//     $('.modal').modal();
//     $('#submitEnquire').click(() => {
//         enquirySubmit();
//     })
//     $('#clickMeButton').click(() => {
//         // clickMe();
//         $.ajax({
//             url: "http://localhost:3000/addTwoNumber?n1=2&n2=3", success: function (result) {
//                 console.log(result);
//                 console.log(result?.statuscocde);
//                 console.log(result?.data);
//                 alert("The result of the addition of two number is " + result?.data);
//             }
//         })
//     })
// });

