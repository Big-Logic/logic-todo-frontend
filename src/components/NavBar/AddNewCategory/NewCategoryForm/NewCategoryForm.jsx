import { useForm } from "react-hook-form";
import { HiOutlineX } from "react-icons/hi";

import { CF, Container, ErrorMsg, Ft } from "./NewCategoryFormStyle";

function FormTitle({ setDisplayTooltip }) {
  return (
    <Ft>
      <div>
        <h3>Category form</h3>
      </div>
      <div>
        <button onClick={() => setDisplayTooltip(false)}>
          <HiOutlineX />
        </button>
      </div>
    </Ft>
  );
}

export default ({ setDisplayTooltip }) => {
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm();
  function submitHandler(data) {
    console.log(data);
    // resetField("categoryName");
    // resetField("categoryDescription");
    setDisplayTooltip(false);
  }
  return (
    <Container>
      <FormTitle setDisplayTooltip={setDisplayTooltip} />
      <CF onSubmit={handleSubmit(submitHandler)}>
        <ErrorMsg>{errors[`${Object.keys(errors)[0]}`]?.message}</ErrorMsg>
        <label htmlFor="name">Name*:</label>
        <input
          type="text"
          placeholder="Enter category Name"
          autoFocus
          {...register("categoryName", {
            required: "Name is required",
          })}
        />

        <label htmlFor="message">Description*:</label>
        <textarea
          rows="5"
          placeholder="Enter category description"
          {...register("categoryDescription", {
            required: "Description is required",
          })}
        ></textarea>

        <button type="submit">Create</button>
      </CF>
    </Container>
  );
};
