(function() {
  'use strict';

  var formData = [
    {
      "type": "text",
      "label": "First Name",
      "id": "user-first-name",
      "icon": "fa-user",
      "options": []
    },
    {
      "type": "text",
      "label": "Last Name",
      "id": "user-last-name",
      "icon": "fa-user",
      "options": []
    },
    {
      "type": "email",
      "label": "Email Address",
      "id": "user-email",
      "icon": "fa-envelope",
      "options": []
    },
    {
      "type": "text",
      "label": "Current website url",
      "id": "user-website",
      "icon": "fa-globe",
      "options": []
    },
    {
      "type": "select",
      "label": "Select Language",
      "id": "user-language",
      "icon": "",
      "options": [
        {
          "label": "English",
          "value": "EN"
        },
        {
          "label": "French",
          "value": "FR"
        },
        {
          "label": "Spanish",
          "value": "SP"
        },
        {
          "label": "Chinese",
          "value": "CH"
        },
        {
          "label": "Japanese",
          "value": "JP"
        }
      ]
    },
    {
      "type": "textarea",
      "label": "Your Comment",
      "id": "user-comment",
      "icon": "fa-comments",
      "options": []
    },
    {
      "type": "tel",
      "label": "Mobile Number",
      "id": "user-mobile",
      "icon": "fa-mobile-phone",
      "options": []
    },
    {
      "type": "tel",
      "label": "Home Number",
      "id": "user-phone",
      "icon": "fa-phone",
      "options": []
    }
  ];

var formNode = document.getElementById('signup');

for (var i = 0; i < formData.length; i++) {
  //create formData var for each object in arr (label is one of the properties)
  var input = formData[i];
  //creating different Nodes of each obj in the array
  var inputNode = document.createElement('input');
  // console.log(input);

  var formNode = document.querySelector('form');
  // add newly created form to form node
  formNode.appendChild(inputNode);

  console.log(formNode);
  var typeNode = document.createElement('type');
  //add newly created type to inputNode
  inputNode.appendChild(typeNode);
  var labelNode = document.createElement('label');
  inputNode.appendChild(labelNode);
  var idNode = document.createElement('id');
  inputNode.appendChild(idNode);
  var iconNode = document.createElement('icon');
  inputNode.appendChild(iconNode);
  var optionsNode = document.createElement('options');
  inputNode.appendChild(optionsNode);

  // console.log(typeNode);


}




  //
  //
  // websitePageOutline = document.createElement('type');
  //
  // websitePageOutline.appendChild(input);
 // console.log(input);
 // this.type =


// append label

  // console.log(newInput);

  //access key/value pair of each object
  // for (var j = 0; j < input.length; j++) {
    // this.input = input[j];
    // console.log(input);
  // }
  //each object has key/value pairs
  // create and append element in for loop
  //
// }






  // end of use strict
}());
