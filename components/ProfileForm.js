import React, { useState } from 'react';

const ProfileForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    photo: '',
    website: '',
    bio: '',
    partyAffiliation: '',
    state: '',
    incumbentPosition: '', // New field
    email: '', // New field
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here (e.g., send the formData to a backend server)
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </div>

      <div>
        <label>Photo:</label>
        <input type="file" name="photo" accept="image/*" onChange={handleChange} />
      </div>

      <div>
        <label>Personal Website:</label>
        <input type="text" name="website" value={formData.website} onChange={handleChange} />
      </div>

      <div>
        <label>Bio:</label>
        <textarea name="bio" value={formData.bio} onChange={handleChange} />
      </div>

      <div>
        <label>Party Affiliation:</label>
        <select name="partyAffiliation" value={formData.partyAffiliation} onChange={handleChange}>
          <option value="">Select Party Affiliation</option>
          <option value="Democratic Party">Democratic Party</option>
          <option value="Republican Party">Republican Party</option>
          <option value="Independent">Independent</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label>State:</label>
        <select name="state" value={formData.state} onChange={handleChange}>
          <option value="">Select State</option>
          <option value="AL">Alabama</option>
          <option value="AK">Alaska</option>
          <option value="AZ">Arizona</option>
          <option value="AR">Arkansas</option>
          <option value="CA">California</option>
          <option value="CO">Colorado</option>
          <option value="CT">Connecticut</option>
          <option value="DE">Delaware</option>
          <option value="DC">District Of Columbia</option>
          <option value="FL">Florida</option>
          <option value="GA">Georgia</option>
          <option value="HI">Hawaii</option>
          <option value="ID">Idaho</option>
          <option value="IL">Illinois</option>
          <option value="IN">Indiana</option>
          <option value="IA">Iowa</option>
          <option value="KS">Kansas</option>
          <option value="KY">Kentucky</option>
          <option value="LA">Louisiana</option>
          <option value="ME">Maine</option>
          <option value="MD">Maryland</option>
          <option value="MA">Massachusetts</option>
          <option value="MI">Michigan</option>
          <option value="MN">Minnesota</option>
          <option value="MS">Mississippi</option>
          <option value="MO">Missouri</option>
          <option value="MT">Montana</option>
          <option value="NE">Nebraska</option>
          <option value="NV">Nevada</option>
          <option value="NH">New Hampshire</option>
          <option value="NJ">New Jersey</option>
          <option value="NM">New Mexico</option>
          <option value="NY">New York</option>
          <option value="NC">North Carolina</option>
          <option value="ND">North Dakota</option>
          <option value="OH">Ohio</option>
          <option value="OK">Oklahoma</option>
          <option value="OR">Oregon</option>
          <option value="PA">Pennsylvania</option>
          <option value="RI">Rhode Island</option>
          <option value="SC">South Carolina</option>
          <option value="SD">South Dakota</option>
          <option value="TN">Tennessee</option>
          <option value="TX">Texas</option>
          <option value="UT">Utah</option>
          <option value="VT">Vermont</option>
          <option value="VA">Virginia</option>
          <option value="WA">Washington</option>
          <option value="WV">West Virginia</option>
          <option value="WI">Wisconsin</option>
          <option value="WY">Wyoming</option>
        </select>
      </div>

      <div>
        <label>Incumbent Position (Optional):</label>
        <input type="text" name="incumbentPosition" value={formData.incumbentPosition} onChange={handleChange} />
      </div>

      <div>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default ProfileForm;
