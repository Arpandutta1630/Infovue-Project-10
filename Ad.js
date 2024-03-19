var users = [
    { id: 1, profile: "Profile.jpg", name: "Add", address: "Apd", domain: "Front-end", status: "Active" },
    { id: 2, profile: "profile1.jpg", name: "Bdd", address: "jpg", domain: "Back-end", status: "Active" },
    { id: 3, profile: "profile1.jpg", name: "Cdd", address: "Cob", domain: "Full-stack", status: "Active" },
    { id: 4, profile: "profile1.jpg", name: "Edd", address: "Slg", domain: "Sales", status: "Active" },
    { id: 5, profile:"profile1.jpg", name: "Fdd", address: "Kolkata", domain: "Hr", status: "Inactive" }
    // Add more user objects as needed
];

// Function to populate the user table
function populateUserTable() {
    var tableBody = document.getElementById("userTableBody");
    tableBody.innerHTML = ""; 

    users.forEach(function(user) {
        var row = document.createElement("tr");

        var checkboxCell = document.createElement("td");
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkboxCell.appendChild(checkbox);
        row.appendChild(checkboxCell);

        var profileCell = document.createElement("td");
        var profileImage = document.createElement("img");
        profileImage.className = "profile-image";
        profileImage.src = user.profile;
        profileImage.alt = "Profile Image";
        profileImage.addEventListener("click", function() {
            openModal();
            populateModal(user);
        });
        profileCell.appendChild(profileImage);
        row.appendChild(profileCell);

        var nameCell = document.createElement("td");
        nameCell.textContent = user.name;
        row.appendChild(nameCell);

        var addressCell = document.createElement("td");
        addressCell.textContent = user.address;
        row.appendChild(addressCell);

        var domainCell = document.createElement("td");
        domainCell.textContent = user.domain;
        row.appendChild(domainCell);

        var statusCell = document.createElement("td");
        var statusButton = document.createElement("button");
        statusButton.textContent = user.status;
        statusButton.addEventListener("click", function() {
            toggleStatus(statusButton);
        });
        statusCell.appendChild(statusButton);
        row.appendChild(statusCell);

        tableBody.appendChild(row);
    });
    function handleSelectAll() {
        var selectAllCheckbox = document.getElementById("selectAllProfiles");
        var checkboxes = document.querySelectorAll("#userTableBody input[type='checkbox']");
    
        checkboxes.forEach(function(checkbox) {
            checkbox.checked = selectAllCheckbox.checked;
        });
    }
    
   
    document.getElementById("selectAllProfiles").addEventListener("click", handleSelectAll);
}

// Function to populate modal with user data
function populateModal(user) {
    var modalTableBody = document.getElementById("modalTableBody");
    modalTableBody.innerHTML = ""; // Clear existing content

    // Sample campaign and attendance data
    var campaigns = ["Campaign 1", "Campaign 2"];
    var attendances = ["90%", "85%"];

    campaigns.forEach(function(campaign, index) {
        var row = document.createElement("tr");

        var campaignCell = document.createElement("td");
        campaignCell.textContent = campaign;
        row.appendChild(campaignCell);

        var attendanceCell = document.createElement("td");
        attendanceCell.textContent = attendances[index];
        row.appendChild(attendanceCell);

        modalTableBody.appendChild(row);
    });
}

// Function to open modal
function openModal() {
    document.getElementById("myModal").style.display = "block";
}

// Function to close modal
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

// Function to toggle status
function toggleStatus(button) {
    if (button.textContent === "Active") {
        button.textContent = "Inactive";
    } else {
        button.textContent = "Active";
    }
}
populateUserTable();