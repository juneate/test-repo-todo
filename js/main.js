// A list (array) of tasks to complete
var tasks = ["Take a break", "Take up homework", "Work on drills", "Complete the course"];

// Counted loop will go through the list and for each one, create a new "task"
for (var i = 0; i < tasks.length; i++) {
  console.log(tasks[i]);
  $('.todo').append('<li class="task"><a href="#">' + tasks[i] + '</a></li>')
}


$('.todo').sortable();
$('.task').draggable({
  containment:'.todo',
  connectToSortable: '.todo'
});


// Append/prepend items to the list
function addItem() {
  // Store an element from the value
  var txt = $('.input').val()

  if (txt.length <= 0) {
    swal("Woops", "You must add a valid task", "error");
  }
  else {
    // Write a new value (blank)
    $('.input').val('');
    // Create a new HTML element
    $('.todo').append('<li class="task"><a href="#">' + txt + '</a></li>')
    // document.querySelector('.todo').innerHTML += '<li class="task"><a href="#">Item 6</a></li>';
    swal("Hurray!", "You just added your first task", "success");

  }

}

// jQuery addEventListener
$('.submit').click(addItem);

// Javascript addEventListener
//document.querySelector('.submit').addEventListener('click', addItem)

// When you click an item in the list, cross that item out.
// 1. Can you add a "complete" class to the first element in the List?
// 2. Wrap it in a function
// 3. When you click ANY task, cross out the first item
// 4. Cross out "this" item

function checkTask() {
  // "this" item that I clicked (how did I get here? that's "this")
  $(this).toggleClass('complete')
}

$('.task').click(checkTask);








// Traverse through the list using the keyboard
// Make tasks draggable
//    Make list the "containment"
//    "connectToSortable" todo list
