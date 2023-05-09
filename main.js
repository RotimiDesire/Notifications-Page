const unreadMessages = document.querySelectorAll(".unread");
const notifications = document.getElementById("notif");
const mark = document.getElementById("mark");

notifications.innerText = unreadMessages.length;

unreadMessages.forEach((unreadMessage) => {
  unreadMessage.addEventListener("click", () => {
    unreadMessage.classList.remove("unread");

    const updatedUnreadMessages = document.querySelectorAll(".unread");
    notifications.innerText = updatedUnreadMessages.length;
  });
});

mark.addEventListener("click", () => {
  unreadMessages.forEach((unreadMessage) => {
    unreadMessage.classList.remove("unread");
  });

  notifications.innerText = 0;
});
