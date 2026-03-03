/* ========================================= */
/*  INTERACTIVE SCANNER LOGIC (script.js)    */
/* ========================================= */

function toggleScan(postId, buttonId) {
    // 1. Find the specific post and button we clicked on
    const post = document.getElementById(postId);
    const button = document.getElementById(buttonId);

    // 2. Check if it is already "scanned"
    if (post.classList.contains('scanned')) {
        
        // TURN OFF: Remove the class to hide red flags
        post.classList.remove('scanned');
        
        // Reset button text
        button.innerText = "🔍 Scan with AI Detector";
        button.style.backgroundColor = "#000"; // Back to black

    } else {
        
        // TURN ON: Add the class to show red flags
        post.classList.add('scanned');
        
        // Change button text to indicate it can be closed
        button.innerText = "✖ Hide Analysis";
        button.style.backgroundColor = "#C53030"; // Turn red to show it's active
    }
}