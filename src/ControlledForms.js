import React, { useSet } from 'react';

var error;
function handleSubmit(e) {
  e.preventDefault();
}

function errors(value, name) {
  document.querySelector('.name').innerText = '';

  document.querySelector('.last').innerText = '';

  document.querySelector('.email').innerText = '';

  // console.log(name, value, 'In error function');
  if (value === '') {
    if (name === 'firstName') {
      document.querySelector('.name').innerText = 'First Name  Required';
    }

    if (name === 'lastName') {
      document.querySelector('.last').innerText = 'Last Name Required';
    }
    if (name === 'email') {
      document.querySelector('.email').innerText = 'EmailId Required';
    }
    console.log(`${name} checking value of error`);
  }
  return error;
}

function handleChange(e) {
  //console.log(e.target.value, e.target.name);
  errors(e.target.value, e.target.name);
}

function form() {
  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <h3>User Form using Function</h3>
        <label>First Name</label> &nbsp;
        <input
          type="text"
          name="firstName"
          onChange={(e) => handleChange(e)}
        ></input>
        <br />
        <span style={{ color: 'red' }} className="name"></span>
        <br />
        <label>Last Name</label> &nbsp;
        <input type="text" name="lastName" onChange={(e) => handleChange(e)} />
        <br />
        <span style={{ color: 'red' }} className="last"></span>
        <br />
        <label>Email</label> &nbsp;
        <input type="text" name="email" onChange={(e) => handleChange(e)} />
        <br />
        <span style={{ color: 'red' }} className="email"></span>
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
        <button type="button">Reset</button> <br />
      </form>
    </>
  );
}

export default form;
