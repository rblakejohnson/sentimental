const API = "https://fakerapi.it/api/v1";
const SEED = 23120;
// TODO: look into getting `/custom` and `?_seed=12345` to work together

export const getPatients = () => {
  return fetch(
    `${API}/custom?_quantity=10&id=uuid&name=name&nextVisit=date&email=email&phone=phone`
  ).then((res) => res.json());
};

export const getPatient = (id) => {
  return fetch(
    `${API}/custom?_quantity=1&id=uuid&name=name&lastVisit=date&nextVisit=date&email=email&phone=phone&image=image`
  ).then((res) => res.json());
};

export const getPatientJournalEntries = (id) => {
  return fetch(
    `${API}/custom?_quantity=3&id=uuid&text=longText&createdDate=date`
  ).then((res) => res.json());
};
