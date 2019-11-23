import axios from "axios";

export default {
  saveContact: function (contactInfo) {
    return axios.post('/contactInfo', { contactInfo })
  }
}