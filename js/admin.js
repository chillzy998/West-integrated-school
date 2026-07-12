// ==========================================
// SIMPLE LOGIN SYSTEM
// ==========================================

const loginBtn = document.getElementById("login-btn");
const username = document.getElementById("username");
const password = document.getElementById("password");
const loginMessage = document.getElementById("login-message");
const loginScreen = document.getElementById("login-screen");
const adminDashboard = document.getElementById("admin-dashboard");

if (loginBtn) {

    loginBtn.addEventListener("click", () => {

        const accounts = [

            {
                username: "principal",
                password: "wis2026",
                role: "Principal"
            },

            {
                username: "teacher",
                password: "teach2026",
                role: "Teacher"
            },

            {
                username: "sslg",
                password: "sslg2026",
                role: "SSLG"
            }

        ];

        const user = accounts.find(account =>
            account.username === username.value.trim() &&
            account.password === password.value.trim()
        );

        if (user) {

            loginScreen.style.display = "none";
            adminDashboard.style.display = "block";

        } else {

            loginMessage.textContent =
            "Incorrect username or password.";

        }

    });

}

// ==========================================
// ANNOUNCEMENT PUBLISHER
// ==========================================

const publishBtn = document.getElementById("publish-btn");

if (publishBtn) {

    publishBtn.addEventListener("click", () => {

        const title = document
            .getElementById("announcement-title-input")
            .value;

        const message = document
            .getElementById("announcement-message-input")
            .value;

        localStorage.setItem("announcementTitle", title);
        localStorage.setItem("announcementMessage", message);

        alert("Announcement published!");

    });

}
