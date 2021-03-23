/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-redeclare */

const image = [];
let keywords = [];

function Image(url, title, description, keyword, horns) {
  this.url = url;
  this.title = title;
  this.description = description;
  this.keyword = keyword;
  this.horns = horns;
}


const ajaxSettings = {
  method: 'get',
  dataType: 'json',
};

// $.ajax('data/page-1.json', ajaxSettings).then((data) => {
//   data.forEach((glry) => {
//     let $data = data;
//     $data.forEach(function(element){
//       image.push(new Image(element.image_url, element.title, element.description, element.keyword, element.horns));
//       keywords.push(element.keyword);
//     });
//     sort('title',image);

//     image.forEach(function(element){
//       renderImage(element.url, element.title, element.description, element.horns, element.keyword);
//     });
//     keywords = new Set(keywords);
//     keywords.forEach(function(element){
//       createList(element);
//     });
//     $('#filter').change(hideElement);
//     // $('#sort').change(event => rerenderImage1(event));
//   });

//   renderImage();
// });

// eslint-disable-next-line no-unused-vars

function renderImage(url, title, description, horns, keyword) {
  let $section = $('<section>').attr('data-keyword', keyword);
  let $title = $('<h2>').text(title);
  let $img = $('<img>').attr('src', url);
  let $text = $('<p>').text(` ${description}`);
  $section.append($title, $img, $text);
  $('main').append($section);
}

//////////////////////////////////////////////////////

// const ajaxSettings = {
//   method: 'get',
//   dataType: 'json',
// };

$.ajax('data/page-2.json', ajaxSettings).then((data) => {
  data.forEach((data => {
    let $data = data;
    $data.forEach(function(element){
      image.push(new Image(element.image_url, element.title, element.description, element.keyword, element.horns));
      keywords.push(element.keyword);
    });
    // sort('title',image);

    image.forEach(function(element){
      renderImage2(element.url, element.title, element.description, element.horns, element.keyword);
    });
    keywords = new Set(keywords);
    keywords.forEach(function(element){
      createList(element);
    });
    $('#filter').change(hideElement);

  }));


});


function renderImage2(url, title, description, horns, keyword) {
  let $section = $('<section>').attr('data-keyword', keyword);
  let $title = $('<h2>').text(title);
  let $img = $('<img>').attr('src', url);
  let $text = $('<p>').text(` ${description}`);
  $section.append($title, $img, $text);
  $('main').append($section);
}


function createList(keyword) {
  let $option = $('<option>').text(keyword).attr('value', keyword);
  $('#filter').append($option);
}

function hideElement() {
  let value = $(this).val();

  if(value !== 'default'){
    $('section').hide();
    $(`section[data-keyword=${value}]`).fadeIn('slow');
  } else {
    $('section').fadeIn('slow');
  }
}


function sort(value, arr) {

  if(value === 'title'){
    arr.sort((a,b) => {
      if( a.title.toUpperCase() > b.title.toUpperCase() )
        return 1 ;
      if(a.title < b.title) {
        return -1; }
      else{
        return 0;
      }

    });
  }
}
function sortLisiner(){
  $( '#btn' ).on( 'click', function() {
    sort('title',image);
    clear();
    renderImage2();


  });
}
function clear(){
  document.getElementById('page').innerHTML='';
}

sortLisiner();




