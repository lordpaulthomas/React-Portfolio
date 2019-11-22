import axios from "axios";

export default {
  saveContact: function (contactInfo) {
    console.log(contactInfo)
    return axios.post('/contactInfo', { contactInfo })
  }
}