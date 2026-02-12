let count = 0;
const display = document.getElementById('count-value');

// Function to update the count
function updateCount(value) {
    count += value;
    display.textContent = count;
    
    // Engineering Logic: Change color based on value
    if (count > 0) display.style.color = "#27ae60";
    if (count < 0) display.style.color = "#e74c3c";
    if (count === 0) display.style.color = "#2c3e50";
}

// Function to reset
function resetCount() {
    count = 0;
    display.textContent = count;
    display.style.color = "#2c3e50";
}
