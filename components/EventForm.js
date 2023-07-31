import React, { useState } from 'react';

const EventForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    location: '',
    googleMapsLink: '',
    date: '',
    time: '',
    description: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can handle form submission here, for example, send data to a server or perform any necessary actions.
    console.log(formData);
    // Reset the form after submission (optional)
    setFormData({
      title: '',
      location: '',
      googleMapsLink: '',
      date: '',
      time: '',
      description: '',
    });
  };

  return (
    <div>
      <h1>Create a New Event</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Event Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        /><br />

        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
        /><br />

        <label htmlFor="googleMapsLink">Google Maps Link:</label>
        <input
          type="url"
          id="googleMapsLink"
          name="googleMapsLink"
          value={formData.googleMapsLink}
          onChange={handleChange}
          required
        /><br />

        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        /><br />

        <label htmlFor="time">Time:</label>
        <input
          type="time"
          id="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        /><br />

        <label htmlFor="description">Description:</label><br />
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows="4"
          cols="50"
          required
        ></textarea><br />

        <input type="submit" value="Create Event" />
      </form>
    </div>
  );
};

export default EventForm;
