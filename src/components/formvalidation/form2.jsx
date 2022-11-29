import { useState } from "react";
import { useForm } from "react-hook-form";
import "./form.css";

const FormData = () => {

const [submit, setSubmit] = useState(false)

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const Data = (e) => {
		localStorage.setItem("form", JSON.stringify(e));
		setSubmit(true)
  };
	JSON.parse(localStorage.getItem('form'));


  return (
    <div className="mainform">
			{submit ? ( 
			<p>Submitted</p>) : ( 
      <form className="formcss" onSubmit={handleSubmit(Data)}>
        <fieldset>
          <legend>User Entry</legend>

          <label>Name</label>
          <br />
          <input type="text" placeholder="First Name" {...register("fname")} />
          <br />
          <input type="text" placeholder="Last Name" {...register("lname")} />
          <label>Email</label>
          <br />
          <input type="email" {...register("email")} />
          <br />
          <button type="submit">Submit</button>
        </fieldset>
      </form>
			)}
    </div>
  );
};

export default FormData;
