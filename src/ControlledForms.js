import React, { useSet } from 'react';

var error;
function handleSubmit(e) {
  e.preventDefault();

  // console.log(e.target[0].value, e.target[0].name);
  // console.log(e.target[1].value, e.target[1].name);
  // console.log(e.target[2].value, e.target[2].name);
  // console.log(e.target[3].value, e.target[3].name);

  // errors(
  //   e.target[0].value,
  //   e.target[1].value,
  //   e.target[2].value,
  //   e.target[3].value
  // );
}
var error_name;
function errors(value, name) {
  console.log(name, value, 'In error function');
  if (value === '') {
    // const [error_name, setError] = useSet('Required');
    console.log(`${name} error`);
  }
  // else if (last === '') {
  //   error = 'Required';
  //   console.log('last error');
  // } else if (email === '') {
  //   error = 'Required';
  //   console.log('email error');
  // } else if (gender === '') {
  //   error = 'Required';
  //   console.log('gender error');
  // }
  return error_name;
}

function handleChange(e) {
  console.log(e.target.value, e.target.name);
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
        <span>error_name</span>
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
        <button type="button">Reset</button> <br />
        <span style={{ color: 'red' }} className="error"></span>
      </form>
    </>
  );
}

export default form;
