import { useForm, SubmitHandler } from "react-hook-form";
import { API_ENDPOINT } from "../../config/constant";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface UserInputs {
  firstName: string;
  lastName: string;
  mobileNO: number;
  email: string;
  password: string;
  cpassword: string;
}

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserInputs>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<UserInputs> = async (data) => {
    const { firstName, lastName, mobileNO, email, password, cpassword } = data;
    // const passwordRegex =
    //   /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    // if (!passwordRegex.test(password)) {
    //   // toast.warning(validatePassword(password), {
    //   //   position: "top-right",
    //   //   autoClose: 5000,
    //   //   hideProgressBar: false,
    //   //   closeOnClick: true,
    //   //   pauseOnHover: true,
    //   //   draggable: true,
    //   //   progress: undefined,
    //   //   theme: "colored",
    //   // });
    //   navigate("/signup");
    // } else {

    if (password !== cpassword) {
      toast.error(`Password and Confrom Password is not same`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }

    try {
      const response = await fetch(`${API_ENDPOINT}/Users/Signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
          mobileNO,
        }),
      });
      const data = await response.json();
      if (data?.error) {
        throw new Error(data?.error);
      }

      if (!response.ok) {
        throw new Error("Signup Failed");
      }
      // console.log(data?.User);
      localStorage.setItem("authToken", data?.token);
      localStorage.setItem("userData", JSON.stringify(data?.User));
      toast.success(`Welcome ${data?.User.firstName} ${data?.User.lastName}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      navigate("/chat");
    } catch (error) {
      console.log(`Operation Failed:${error}`);
      toast.error(`${error}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
    // }
  };

  return (
    <form
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="text-3xl font-bold text-left text-gray-800 mb-8 pr-6">
        Signup
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <label
            htmlFor="firstName"
            className="block text-gray-700 font-semibold mb-2"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            placeholder="Bob"
            {...register("firstName", { required: true })}
            className={`w-full border rounded-md py-2 px-3 text-gray-700 bg-white leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue ${
              errors.firstName
                ? "focus:shadow-outline-red bg-red-100 shadow-red-200 shadow-sm focus:border-red-400 border-red-200"
                : ""
            }`}
          />
          {errors.firstName && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}

          {/* Add other fields as needed */}
          <label
            htmlFor="lastName"
            className="block text-gray-700 font-semibold mb-2 mt-4"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            placeholder="Richy"
            {...register("lastName", { required: true })}
            className={`w-full border rounded-md py-2 px-3 text-gray-700 bg-white leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue ${
              errors.lastName
                ? "focus:shadow-outline-red bg-red-100 shadow-red-200 shadow-sm focus:border-red-400 border-red-200"
                : ""
            }`}
          />
          {errors.lastName && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}

          <label
            htmlFor="mobileNO"
            className="block text-gray-700 font-semibold mb-2 mt-3"
          >
            Phone
          </label>
          <input
            type="number"
            id="mobileNO"
            maxLength={10}
            placeholder="1234567890"
            {...register("mobileNO", { required: true })}
            className={`w-full border rounded-md py-2 px-3 text-gray-700 bg-white leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue  ${
              errors.mobileNO
                ? "focus:shadow-outline-red bg-red-100 shadow-red-200 shadow-sm focus:border-red-400 border-red-200"
                : ""
            }`}
          />
          {errors.mobileNO && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>

        <div>
          {/* Second set of fields */}
          <label
            htmlFor="email"
            className="block text-gray-700 font-semibold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="xyz@gmail.com"
            {...register("email", { required: true })}
            className={`w-full border rounded-md py-2 px-3 text-gray-700 bg-white leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue  ${
              errors.email
                ? "focus:shadow-outline-red bg-red-100 shadow-red-200 shadow-sm focus:border-red-400 border-red-200"
                : ""
            }`}
          />
          {errors.email && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}

          {/* Add other fields as needed */}
          <label
            htmlFor="password"
            className="block text-gray-700 font-semibold mb-2 mt-4"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
            {...register("password", { required: true })}
            className={`w-full border rounded-md py-2 px-3 text-gray-700 bg-white leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue ${
              errors.password
                ? "focus:shadow-outline-red bg-red-100 shadow-red-200 shadow-sm focus:border-red-400 border-red-200"
                : ""
            }`}
          />
          {errors.password && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}

          <label
            htmlFor="cpassword"
            className="block text-gray-700 font-semibold mb-2 mt-4"
          >
            Conform Password
          </label>
          <input
            type="password"
            id="cpassword"
            placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
            {...register("cpassword", { required: true })}
            className={`w-full border rounded-md py-2 px-3 text-gray-700 bg-white leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue ${
              errors.cpassword
                ? "focus:shadow-outline-red bg-red-100 shadow-red-200 shadow-sm focus:border-red-400 border-red-200"
                : ""
            }`}
          />
          {errors.cpassword && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>
      </div>

      {/* Add the remaining fields outside the grid */}
      <div className="w-full my-3 mt-6">
        <input
          type="submit"
          value="Sign Up"
          className="w-1/2 block text-xl p-2 bg-blue-500 text-white font-bold rounded cursor-pointer mx-auto"
        />
      </div>
      <fieldset className="border-t border-slate-300">
        <legend className="mx-auto border rounded px-4 text-gray-600 text-base italic text-center">
          OR
        </legend>
        <div className="flex text-base items-center justify-center flex-wrap ">
          Already have an Account?
          <Link
            to="/signin"
            className="text-blue-500 font-bold mx-2 hover:underline"
          >
            Log in
          </Link>
        </div>
      </fieldset>
    </form>
  );
};

export default SignupForm;
