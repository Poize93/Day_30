import React from 'react';



function handleSubmit(e) {
  e.preventDefault();
  console.log('Hi');

}

function form() {
  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <h3>User Form using Function</h3>
        
        <label>First Name</label> &nbsp;
        <input type="text" name="firstName" class="firstName" ></input>
        <br />
        <br />
        <label>Last Name</label> &nbsp;
        <input type="text" name="lastName"  />
        <br />
        <br />
        <label>Email</label> &nbsp;
        <input type="text" name="email"  />
        <br />
        <br />
        <label required>Gender</label> &nbsp;
        <input type="Radio" name="gender" value="male" />
        Male
        <input type="Radio" name="gender" value="female" />
        Female <br />
        <br />
        <label>Courses</label>
        <select name="courses">
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
