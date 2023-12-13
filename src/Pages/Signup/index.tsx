import SignupForm from "./SignupForm";
import SignupIMG from "../../assets/Signup.png";

const Signup = () => {
  return (
    <div className="min-h-screen h-full flex items-center justify-center bg-gray-200">
      <div className="max-w-2xl w-full px-6 py-8 bg-white rounded-lg shadow-md flex items-center justify-center">
        <div className="w-full">
          <SignupForm />
        </div>
        <div className="flex items-center justify-center  w-xl mx-2 max-[634px]:hidden">
          <img src={SignupIMG} alt="sportsImage" />
        </div>
      </div>
    </div>
  );
};

export default Signup;
