import axios from "axios";

export default {
    // Get all users
    getUsers: function () {
        return axios.get("/api/users");
    },
    // Gets the users with the given id
    getUser: function (address) {
        return axios.get("/api/users/" + address);
    },
    // Deletes the user with the giver id
    deleteUser: function (id) {
        return axios.delete("/api/users/" + id);
    },
    // Saves a user to the database
    saveUser: function (userData) {
        return axios.post("/api/users", userData);
    }
};