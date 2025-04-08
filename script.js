const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim(); // Get value and remove whitespace

    if (taskText === '') {
        alert('Please enter a task!'); // Basic validation
        return;
    }

    // Create list item element
    const li = document.createElement('li');

    // Create span for the task text
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    // Add event listener to toggle completion on text click
    taskSpan.addEventListener('click', () => {
        li.classList.toggle('completed');
    });

    // Create delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn'); // Add class for styling
    // Add event listener to remove the li when delete button is clicked
    deleteBtn.addEventListener('click', () => {
        taskList.removeChild(li);
        // Or use: li.remove();
    });

    // Append span and button to list item
    li.appendChild(taskSpan);
    li.appendChild(deleteBtn);

    // Append list item to the task list (ul)
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = '';
     taskInput.focus(); // Keep focus on input for easy adding
}

// Event listener for the Add Task button
addTaskBtn.addEventListener('click', addTask);

// Event listener for pressing Enter in the input field
taskInput.addEventListener('keypress', (event) => {
    // Check if the key pressed was 'Enter'
    if (event.key === 'Enter') {
        addTask();
    }
});
