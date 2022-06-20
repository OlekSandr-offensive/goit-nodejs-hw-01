const fs = require("fs").promises;
const path = require("path");
const { v4 } = require("uuid");
const colors = require("colors");

const contactsPath = path.join(__dirname, "db", "contacts.json");
const UNICODE = "utf8";

async function listContacts() {
  try {
    const contacts = await fs.readFile(contactsPath, UNICODE);
    return JSON.parse(contacts);
  } catch (err) {
    console.log(err);
  }
}

async function getContactById(contactId) {
  const contacts = await listContacts();
  const foundContact = contacts.find(contact => contact.id === contactId);
  if (!foundContact) {
    return null;
  }

  return foundContact;
}

async function removeContact(contactId) {
  const contact = await getContactById(contactId);
  if (!contact) {
    return;
  }
  const contacts = await listContacts();
  const updatedContacts = contacts.filter(contact => contact.id !== contactId);
  try {
    await fs.writeFile(contactsPath, JSON.stringify(updatedContacts), UNICODE);
    console.log(`Contact ${contact.name} deleted!`.green);
  } catch (error) {
    console.log(error);
  }
}

async function addContact(name, email, phone) {
  const contacts = await listContacts();
  const newContact = {
    id: v4(),
    name,
    email,
    phone,
  };
  contacts.push(newContact);
  try {
    await fs.writeFile(contactsPath, JSON.stringify(contacts), UNICODE);
    console.log(`Contact ${newContact.name} added!`.green);
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
