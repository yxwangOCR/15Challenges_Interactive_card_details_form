import "../styles/Form.css";
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    setValue,
    setError,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor='cardName'>CARDHOLDER NAME</label>
        <input
          type='text'
          placeholder='e.g. Jane Appleseed'
          {...register("cardName", { required: "Please enter your full name" })}
        />
        {errors.cardName && <span>{errors.cardName.message}</span>}
      </div>

      <div>
        <label htmlFor='cardNumber'>CARD NUMBER</label>
        <input
          {...register("cardNumber", {
            required: { value: true, message: "Card number is required" },
            minLength: {
              value: 19,
              message: "Card number may not be less than 16 numbers",
            },
            pattern: {
              value: /^[\d+\s]*$/,
              message: "Card number may only contain digits and spaces",
            },
          })}
          type='tel'
          inputMode='numeric'
          autoComplete='cc-number'
          name='cardNumber'
          placeholder='e.g. 1234 5678 9123 0000'
          id='cardNumber'
          onChange={(e) => {
            const { value } = e.target;
            const cardNumber =
              value
                .replace(/\s/g, "")
                .match(/.{1,4}/g)
                ?.join(" ")
                .substr(0, 19) || "";

            setValue("cardNumber", cardNumber, { shouldValidate: true });
          }}
        />
        {errors.cardNumber && <span>{errors.cardNumber.message}</span>}
      </div>

      <div className='date-cvc'>
        <div>
          <label htmlFor=''>EXP. DATE (MM/YY)</label>
          <div className='date'>
            <input
              type='tel'
              placeholder='MM'
              {...register("month", {
                min: { value: 1, message: "Month must be between 1 and 12" },
                max: { value: 12, message: "Month must be between 1 and 12" },
                required: { value: true, message: "Month can't be blank" },
                maxLength: {
                  value: 2,
                  message: "Month cannot exceed 2 numbers",
                },
                minLength: {
                  value: 2,
                  message: "Month cannot be less than 2 numbers",
                },
              })}
            />
            <input
              type='tel'
              placeholder='YY'
              {...register("year", {
                required: { value: true, message: "Year can't be blank" },
                maxLength: {
                  value: 2,
                  message: "Year cannot exceed 2 numbers",
                },
                minLength: {
                  value: 2,
                  message: "Year cannot be less than 2 numbers",
                },
              })}
            />
          </div>
          {(errors.month && <span>{errors.month.message}</span>) ||
            (errors.year && <span>{errors.year.message}</span>)}
        </div>

        <div>
          <label htmlFor=''>CVC</label>
          <input
            type='tel'
            placeholder='e.g. 123'
            {...register("cvc", {
              required: { value: true, message: "CVC can't be blank" },
              maxLength: {
                value: 3,
                message: "CVC cannot exceed 3 numbers",
              },
              minLength: {
                value: 3,
                message: "CVC cannot be less than 3 numbers",
              },
            })}
          />
          {errors.cvc && <span>{errors.cvc.message}</span>}
        </div>
      </div>

      <button type='sumbit'>Confirm</button>
    </form>
  );
};

export default Form;
