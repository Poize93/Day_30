import React, { useSet } from 'react';

function handleSubmit(a) {
  console.log(a.length);
  if (a.length < 1) {
    var error = 'Required Field';
  } else {
    error = '';
  }
}

function handleChange(e) {
  e.preventDefault();
  //console.log(e.target.name ,e.target.value);
  var result = e.target.value;
  handleSubmit(result);
}

function form() {
  return (
    <>
      <form onSubmit={(e) => handleChange(e)}>
        <h3>User Form using Function</h3>
        <label>First Name</label> &nbsp;
        <input
          type="text"
          name="firstName"
          onChange={(e) => handleChange(e)}
        ></input>
        <h6>A</h6>
        <br />
        <label>Last Name</label> &nbsp;
        <input type="text" name="lastName" onChange={(e) => handleChange(e)} />
        <br />
        <br />
        <label>Email</label> &nbsp;
        <input type="text" name="email" onChange={(e) => handleChange(e)} />
        <br />
        <br />
        <label required>Gender</label> &nbsp;
        <input
          type="Radio"
          name="gender"
          value="male"
          onChange={(e) => handleChange(e)}
        />
        Male
        <input
          type="Radio"
          name="gender"
          value="female"
          onChange={(e) => handleChange(e)}
        />
        Female <br />
        <br />
        <label>Courses</label>
        <select name="courses" onChange={(e) => handleChange(e)}>
          <option value="React">React</option>
          <option value="node">NodeJS</option>
          <option value="mongo">MongoDB</option>
          <option value="mysql">MYSQL</option>
        </select>{' '}
        <br /> <br />
        <button type="submit">Submit</button> &nbsp;
        <button type="button">Reset</button>
      </form>
    </>
  );
}

export default form;
