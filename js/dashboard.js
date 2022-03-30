const sidebar = document.getElementById('sidebar');
const dashboardcontent = document.getElementById('dashboard-content');

function toggleSidebar(){
    sidebar.classList.toggle("sidebar--active");
    dashboardcontent.classList.toggle("content-div--active");
}