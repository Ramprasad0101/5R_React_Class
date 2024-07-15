  const FormsComponent = () => {
    return (
    <h3>
        <center>
          <form>
    <br />
    <label>First Name:</label>
    <input type="text" placeholder="First Name" required />
    <br />
    <label>Last Name:</label>
    <input type="text" placeholder="Last Name " required/>
    <br />
    <label>Username:</label>
    <input type="text" placeholder="Enter username" required/>
    <br />
    <label>Password:</label>
    <input type="password" placeholder="Enter password" required />
    <br />
    <label>Confirm Password:</label>
    <input type="password" placeholder="Confirm Password" required />
    <br />
    <button>Submit</button>
  </form>
  </center>
  </h3>
    )
    
  };

  export default FormsComponent;
