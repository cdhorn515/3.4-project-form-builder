(function() {
  'use strict';


  var formData = [{
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
      "options": [{
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

  // var titleNode = document.createElement('h1');
  // titleNode.textContent = "Sign Up For My Web App";
  // formNode.appendChild(titleNode);

  // create form for DOM from form id signup in html
  var formNode = document.querySelector('.fields');

  //loop through the object
  for (var i = 0; i < formData.length; i++) {
    var input = formData[i];
    console.log(formData[i]);
    //if input type is small text box
    // create input element (new object)
    if (input.type === "text" || input.type === "tel" || input.type === "email") {
      var inputNode = document.createElement('input');
      inputNode.style.display = 'block';
      //set attribute (property:value) of element
      inputNode.setAttribute('type', input.type);
      inputNode.setAttribute('placeholder', input.label);
      formNode.appendChild(inputNode);
      //append newly created p-v pair to my object
    } else if (input.type === "textarea") {
      inputNode = document.createElement('textarea');
      inputNode.style.display = 'block';
      inputNode.setAttribute('textarea', input.type);
      inputNode.setAttribute('placeholder', input.label);
      formNode.appendChild(inputNode);

    } else if (input.type === "select") {
      // loop through array in options)
      var selectNode = document.createElement('select');
      // selectNode.style.display = 'block';
    }
  }
  // loop through options for select box
  for (let j = 0; j < formData[4].options.length; j++) {
    //create options Node--text in drop down
    var inputOption = formData[4].options[j];
    // var inputOption = input.options[j];
    var optionNode = document.createElement('option');
    optionNode.textContent = inputOption.label;
    optionNode.setAttribute('value', inputOption.value);
    formNode.appendChild(selectNode);
    selectNode.appendChild(optionNode);
  }






  // formNode.setAttribute('display', block);



  // Hints -----------

  // Accessing specific properties.
  //formData[0].label // this will give us "First Name"
  // as you can see we access the first element in the array
  // with [0] and then grab the property "label" using the "." character

  // Looping
  // Sample of how to loop over the formData
  //for(let i=0; i<formData.length; i++){

  // Check your dev tools console for what the items in formData have
  //  console.log(formData[i])

  //}





  // inputNode.setAttribute("input", )
  //creating different Nodes of each obj in the array
  // var inputNode = document.createElement('input');
  // console.log(input);

  // var typeNode = document.createElement('type');
  //add newly created type to inputNode
  // inputNode.appendChild(typeNode);
  // var labelNode = document.createElement('label');
  // inputNode.appendChild(labelNode);
  // var idNode = document.createElement('id');
  // inputNode.appendChild(idNode);
  // var iconNode = document.createElement('icon');
  // inputNode.appendChild(iconNode);
  // var optionsNode = document.createElement('options');
  // inputNode.appendChild(optionsNode);

  // console.log(typeNode);







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









  //  console.log(input.hasOwnProperty('input'));
  //check which type it is and create correct input
  // if (inputNode.hasOwnProperty() === 'text' || inputNode.hasOwnProperty() === 'email' || inputNode.hasOwnProperty() === 'tel'){
  //   inputNode = document.createElement('input');
  // } else { if(inputNode.hasOwnProperty() === 'textarea'){
  //   inputNode = document.createElement('textarea');
  // } else { inputNode = document.createElement('select');
  // // console.log(inputNode);
  // }
  // add new input to parent element formNode
  // }
  //     inputNode.setAttribute('type', input.type);
  //     inputNode.setAttribute('placeholder', input.label);
  //     inputNode.setAttribute('id', input.id);
  //     inputNode.setAttribute('icon', input.icon);
  //
  // formNode.appendChild(inputNode);
  //       // formNode.appendChild(text);
  //       // formNode.appendChild(email);
  //       // formNode.appendChild(tel);
  //       // formNode.appendChild(textarea);
  //       // formNode.appendChild(select);
  //       console.log(inputNode);
  //   }

  // var input = formData[i];







  // end of use strict
}());
