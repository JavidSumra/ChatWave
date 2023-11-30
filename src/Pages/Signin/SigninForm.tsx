import { useForm, SubmitHandler } from "react-hook-form";
import { API_ENDPOINT } from "../../config/constant";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface UserInputs {
  email: string;
  password: string;
}

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserInputs>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<UserInputs> = async (data) => {
    const { email, password } = data;
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
    try {
      const response = await fetch(`${API_ENDPOINT}/Users/Signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (data?.error) {
        throw new Error(data?.error);
      }

      if (!response.ok) {
        throw new Error("Signup Failed");
      }
      console.log(data?.User);
      localStorage.setItem("authToken", data?.token);
      localStorage.setItem("userData", JSON.stringify(data?.User));
      toast.success(
        `Welcome back ${data?.User.firstName} ${data?.User.lastName}`,
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        }
      );
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
        Signin
      </div>
      <div>
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
        <label
          htmlFor="password"
          className="block text-gray-700 font-semibold mb-2"
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
        <div className="w-full my-3">
          <input
            type="submit"
            value="Login"
            className="w-full text-xl p-2 bg-blue-500 text-white font-bold rounded cursor-pointer"
          />
        </div>
        <fieldset className="border-t border-slate-300">
          <legend className="mx-auto border rounded px-4 text-gray-600 text-base italic text-center">
            OR
          </legend>
          <div className="flex text-base items-center justify-center flex-wrap ">
            Don't have an Account?
            <a
              href="/signup"
              className="text-blue-500 font-bold mx-2 hover:underline"
            >
              Register
            </a>
          </div>
        </fieldset>
      </div>
    </form>
  );
};

export default SignupForm;
