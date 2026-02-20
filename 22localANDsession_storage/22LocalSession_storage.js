// --- 1. LOCAL STORAGE ---

// Setting data
localStorage.setItem("username", "Manas Kumar");
localStorage.setItem("age", "25");

// Getting data
const user = localStorage.getItem("username"); 
console.log("User:", user); // Output: Manas Kumar

// Removing specific item
localStorage.removeItem("age");

// --- 2. HANDLING OBJECTS/ARRAYS (The JSON Trick) ---

const userObj = { name: "nikesh", role: "Developer" };

// Stringify before saving
localStorage.setItem("profile", JSON.stringify(userObj));

// Parse after getting
const savedProfile = JSON.parse(localStorage.getItem("profile"));
console.log("Role:", savedProfile.role); // Output: Developer

// --- 3. SESSION STORAGE ---

// Similar syntax, but clears on tab close
sessionStorage.setItem("sessionID", "XYZ-123");
console.log(sessionStorage.getItem("sessionID")); // Output: XYZ-123

// --- 4. UTILITIES ---

// Get total items
console.log("Total Local Items:", localStorage.length);

// Get key by index (starts at 0)
console.log("First Key Name:", localStorage.key(0));

// Clear everything
// localStorage.clear();
