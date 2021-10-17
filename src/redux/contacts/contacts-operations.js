import axios from "axios";
import actions from "./contacts-actions.js";

axios.defaults.baseURL = "http://localhost:3001";

const {
  fetchRequest,
  fetchSuccess,
  fetchError,
  addRequest,
  addSuccess,
  addError,
  deleteSuccess,
  deleteError,
  deleteRequest,
} = actions; //destructuring

const addContact =
  ({ name, number }) =>
  (dispatch) => {
    const contacts = {
      name,
      number,
    };

    dispatch(addRequest());
    axios
      .post("/contacts", {
        name: contacts.name,
        number: contacts.number,
      })
      .then(({ data }) => dispatch(addSuccess(data)))
      .catch((error) => dispatch(addError(error)));
  };

const deleteContact = (id) => (dispatch) => {
  dispatch(deleteRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(deleteSuccess(id)))
    .catch((error) => dispatch(deleteError(error)));
};

const fetchContacts = () => async (dispatch) => {
  dispatch(fetchRequest());

  try {
    const { data } = await axios.get("/contacts");
    dispatch(fetchSuccess(data));
  } catch (error) {
    dispatch(fetchError(error));
  }
  //   axios
  //     .get("/contacts")
  //     .then((res) => dispatch(fetchSuccess(res.data)))
  //     .catch((error) => dispatch(fetchError(error)));
};

// eslint-disable-next-line
export default {
  addContact,
  deleteContact,
  fetchContacts,
};
