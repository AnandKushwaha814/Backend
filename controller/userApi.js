const userSchema = require("../models/User");
const axios = require("axios");
exports.showData = async (req, res) => {
  try {
    // Fetching user data from an external API
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    const users = response.data;

    // Create a table with Tailwind CSS and the fetched user data
    let table = `
      <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
      <div class="container mx-auto p-5">
        <table class="min-w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr class="bg-gray-200">
              <th class="border border-gray-300 px-4 py-2 text-left">Name</th>
              <th class="border border-gray-300 px-4 py-2 text-left">Email</th>
              <th class="border border-gray-300 px-4 py-2 text-left">Phone</th>
            </tr>
          </thead>
          <tbody>
    `;

    users.forEach((user) => {
      table += `
        <tr class="even:bg-gray-100 hover:bg-blue-100">
          <td class="border border-gray-300 px-4 py-2">${user.name}</td>
          <td class="border border-gray-300 px-4 py-2">${user.email}</td>
          <td class="border border-gray-300 px-4 py-2">${user.phone}</td>
        </tr>
      `;
    });

    table += `
          </tbody>
        </table>
      </div>
    `;

    // Send the table as HTML with Tailwind CSS styles
    res.status(200).set("Content-Type", "text/html").send(table);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching users from the API", error });
  }
};
