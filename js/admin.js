const publishBtn = document.getElementById("publish-btn");

publishBtn.addEventListener("click", () => {

    const title =
    document.getElementById("announcement-title-input").value;

    const message =
    document.getElementById("announcement-message-input").value;

    localStorage.setItem("announcementTitle", title);

    localStorage.setItem("announcementMessage", message);

    alert("Announcement published!");

});