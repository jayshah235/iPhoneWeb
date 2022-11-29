import { useState } from "react";
import "./form.css";

const Formvalidation = () => {
  const Data = { firstName: "", lastName: "", email: "", password: "" };
  const [inputData, setInputData] = useState(Data);
  const [submit, setSubmit] = useState(false);

  const handleData = (e) => {
    setInputData({ ...inputData, [e.target.name]: [e.target.value] });
  };
  console.log(inputData);
  const submitdata = () => {
    if (
      !!inputData.firstName &&
      !!inputData.lastName &&
      !!inputData.email &&
      !!inputData.password
    ) {
      setSubmit(true);
    }
  };
  return (
    <div className="mainform">
      {submit ? (
        <p className="onsubmitdata">Submitted</p>
      ) : (
        <form action="" className="formcss" onSubmit={submitdata}>
          <fieldset className="fieldpadding">
            <legend>Form Validation</legend>
            <input
              type="text"
              name="firstName"
              placeholder="Firstname"
              value={inputData.firstName}
              onChange={handleData}
              required
              className={inputData.firstName ? "inputcss" : ""}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Lastname"
              value={inputData.lastName}
              onChange={handleData}
              required
              className={inputData.lastName ? "inputcss" : ""}
              autoComplete="false"
            />
            <input
              type="email"
              name="email"
              placeholder="Please enter your email"
              value={inputData.email}
              onChange={handleData}
              required
              className={inputData.email ? "inputcss" : ""}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={inputData.password}
              onChange={handleData}
              required
            />
            <button className="formbtn">Submit Now</button>
          </fieldset>
        </form>
      )}
    </div>
  );
};

export default Formvalidation;
