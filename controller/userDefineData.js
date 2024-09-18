const userSchema = require("../models/User");
const users = [
  {
    FirstName: "Anand",
    LastName: "Kushwaha",
    Email: "anandkushwaha1220@gmail.com",
    Phone: "6287545898",
    designation: "Software Engineer",
  },
  {
    FirstName: "Anish",
    LastName: "Kumar",
    Email: "anish@gmail.com",
    Phone: "XXXXXXXXX",
    designation: "Data Sciensce",
  },
  {
    FirstName: "Ramehs",
    LastName: "Kumar",
    Email: "rameshyadav@gmail.com",
    Phone: "9876543210",
    designation: "Project Manager",
  },
  {
    FirstName: "Abhishek",
    LastName: "Kumar",
    Email: "asabhi@gmail.com",
    Phone: "9546448005",
    designation: "Project Manager",
  },
  {
    FirstName: "Ajit",
    LastName: "Kumar",
    Email: "ajitkush@gmail.com",
    Phone: "997109507",
    designation: "Mechnical Enginner",
  },
  {
    FirstName: "Prince",
    LastName: "Kumar",
    Email: "prince@gmail.com",
    Phone: "123456789",
    designation: "Video Editor",
  },
];
exports.dataShow = async (req, res) => {
  try {
    let table = `
      <style>
      body{
        background-color
      }
        table {
          width: 50%;
          margin: 20px auto;
          border-collapse: collapse;
          font-family: Arial, sans-serif;
          display: none; /* Initially hide the table */
        }
        th, td {
          padding: 10px;
          text-align: left;
          border: 1px solid #ddd;
        }
        th {
          background-color: #f2f2f2;
        }
        tr:nth-child(even) {
          background-color: #f9f9f9;
        }
        tr:hover {
          background-color: #d1e7fd;
        }
        .container {
        background-color: gray;
        border-radius: 20px;
          text-align: center;
          margin: 20px;
          display:flex;
          justify-content: center;
          align-items: center;
          flex-direction: row;
        }
        .show-button, .show-button2{
          background-color: #007BFF;
          color: white;
          padding: 15px 20px;
          border: none;
          cursor: pointer;
          font-size: 16px;
          border-radius: 5px;
        }
        .show-button:hover {
          background-color: #0056b3;
        }
      </style>

      <div class="container">
        <button class="show-button" onclick="showTable()">Show User Data</button>
      <div class="container">
        <button class="show-button2" onclick="hideTable()">Hide Table</button>
      </div>
      </div>

      <table id="userTable">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
    `;

    users.forEach((user) => {
      table += `
        <tr>
          <td>${user.FirstName}</td>
          <td>${user.LastName}</td>
        </tr>
      `;
    });

    table += `
        </tbody>
      </table>

      <script>
        // JavaScript function to show the table when the button is clicked
        function showTable() {
          document.getElementById('userTable').style.display = 'table';
        }
          function hideTable(){
          document.getElementById('userTable').style.display = 'none';
          }
      </script>
    `;

    // Send the HTML content with styles and the button functionality
    res.status(200).set("Content-Type", "text/html").send(table);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users", error });
  }
};
