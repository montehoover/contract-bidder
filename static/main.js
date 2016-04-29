$(document).ready(function() {
  
  $('#add-subproject-btn').click(function(e) {
    var subprojDiv = document.createElement('div'); //$('<div></div>');
    var heading = '<h5>New Work/Supply Request:</h5>'
    var input1 = '<input name="categories" type="text" class="subproj-category form-control" placeholder="Category of work or supply request (e.g. Electrical or Concrete)">'
    var input2 = '<textarea name="descriptions" class="subproj-desc form-control" rows="2" id="description" placeholder="Brief description of the request"></textarea>'
    var input3 = '<input type="file" name="files" class="subproj-file form-control">'
    var html = heading + input1 + input2 + input3
    subprojDiv.innerHTML = html;
    $('#subprojects-div').append(subprojDiv);
  });
});
