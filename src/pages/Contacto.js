import React, { useEffect, useState } from "react";
import FoodContacto from "../assets/contacto.jpg";
import "../styles/Contacto.css";

import { addNotification } from "../shared";

import { db } from "../firebase";

import {
  addDoc,
  getDocs,
  collection,
  doc,
  onSnapshot,
} from "firebase/firestore";

function Contacto() {
  const [contactos, setContactos] = useState([]);

  function saveContact(values) {
    try {
      addDoc(collection(db, "contacto"), values);
      addNotification("¡Éxito!", "Se enviaron los datos correctamente");
    } catch (e) {
      addNotification("Error", e.message);
    }
  }

  function submitHandler(event) {
    event.preventDefault();
    const { name, email, message } = event.target.elements;

    saveContact({
      name: name.value,
      email: email.value,
      message: message.value,
    });

    event.target.reset();
  }

  function getContacts() {
    onSnapshot(collection(db, "contacto"), (snapshot) => {
      const contactsArray = [];
      snapshot.forEach((doc) => {
        contactsArray.push({ ...doc.data(), id: doc.id });
      });
      setContactos(contactsArray);
    });
  }

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <div className="contacto">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${FoodContacto})` }}
      />
      <div className="rightSide">
        <h1> Contactenos</h1>

        <form onSubmit={submitHandler}>
          <label htmlFor="name">Nombre</label>
          <input
            id="name"
            placeholder="Escribe su nombre completo..."
            type="text"
            required
          />
          <label htmlFor="email">Email</label>
          <input
            id="email"
            placeholder="Escribe su dirección de correo Electronico..."
            type="email"
            required
          />
          <label htmlFor="message">Mensaje</label>
          <textarea
            rows="6"
            placeholder="Escribe su mensaje..."
            id="message"
            required
          ></textarea>
          <button type="submit"> Enviar Mensaje</button>
        </form>
        <div className="px-5">
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Email</th>
                <th scope="col">Mensaje</th>
              </tr>
            </thead>
            <tbody>
              {contactos.map((contact, index) => (
                <tr key={contact.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{contact.name}</td>
                  <td>{contact.email}</td>
                  <td>{contact.message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
