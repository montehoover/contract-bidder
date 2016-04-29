console.log('main.js is working');

$(document).ready(function() {
  
  $('#add-subproject-btn').click(function(e) {
    console.log(e);
    // Add new div that has a form for new

    // 1. create div element
    // 2. add input fields
    // 3. add appropriate bootstrap classes
    // 4. append it to subproject div in form

    // fields:
    // 1. Category
    // 2. Brief Description of work
    // 3. upload additional documents (e.g. Scope of Work doc)

    var subprojDiv = document.createElement('div'); //$('<div></div>');
    var heading = '<h5>New Work/Supply Request:</h5>'
    var input1 = '<input name="categories" type="text" class="subproj-category form-control" placeholder="Category of work or supply request (e.g. Electrical or Concrete)">'
    var input2 = '<textarea name="descriptions" class="subproj-desc form-control" rows="2" id="description" placeholder="Brief description of the request"></textarea>'
    var input3 = '<input type="file" name="files" class="subproj-file form-control">'
    var html = heading + input1 + input2 + input3
    subprojDiv.innerHTML = html;
    $('#subprojects-div').append(subprojDiv);
    console.log($('#subprojects-div'));
  });
  
  // $('#add-project-btn').submit(function(e) {
  //   var subprojects = []
  //   var categories = []
  //   var descriptions = []
  //   var files = []

  //   $.each($('.subproj-category'), function() {
  //     categories.push($(this).val())
  //   });
  //   $.each($('.subproj-desc'), function() {
  //     descriptions.push($(this).val())
  //   });
  //   $.each($('.subproj-file'), function() {
  //     categories.push($(this).val())
  //   })

  //   for (var i = 0; i < categories.length; i++) {
  //     subprojects.push({
  //       category: categories[i],
  //       description: descriptions[i],
  //       file: files[i]
  //     });
  //   };

  //   $.ajax({
  //     url: '/projects/new',
  //     method: 'POST',
  //     data: {subprojects: subprojects},
  //     success: function(data, status, obj) {
  //       alert('Deleted Favorite');
  //       window.location.reload(true);
  //     },
  //     error: function(err, status, message) {
  //       console.log(err, status, message);
  //     }
  //   });

  // });  
    

});
