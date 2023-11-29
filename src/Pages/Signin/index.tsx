import SigninForm from "./SigninForm";
import SignupIMG from "../../assets/Signup_Page.png";

const Signup = () => {
  return (
    <div className="min-h-screen h-full flex items-center justify-center bg-gray-100">
      <div className="max-w-2xl w-full px-6 py-8 bg-white rounded-lg shadow-md flex items-center justify-center">
        <div className="w-full">
          <SigninForm />
        </div>
        <div className="flex items-center justify-center  w-xl mx-2 max-[634px]:hidden">
          <img src={SignupIMG} alt="sportsImage" />
        </div>
      </div>
    </div>
  );
};

export default Signup;
