import React, { useState } from "react";

const Signin = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Congratulations You Are Loged in");
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <h1>Welcome to LogIn page</h1>
      <div className="formDiv">
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </label>
          <br />

          <label>
            Password:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </label>
          <br />

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Signin;
