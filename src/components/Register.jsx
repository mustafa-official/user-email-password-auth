import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { useState } from "react";
import { IoMdEye, IoIosEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";

const Register = () => {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const emailValue = e.target.email.value;
    const passValue = e.target.password.value;
    const termsValue = e.target.terms.checked;
    setError("");
    setSuccess("");

    if (passValue.length < 6) {
      setError("Password should be at least 6 characters");
      return;
    } else if (!/[A-Z]/.test(passValue)) {
      setError("Using at least one uppercase character");
      return;
    } else if (!termsValue) {
      setError("Accept our Terms & Conditions");
      return;
    }
    createUserWithEmailAndPassword(auth, emailValue, passValue)
      .then((result) => {
        setSuccess("Created successfully");
        console.log(result.user);
      })
      .catch((error) => {
        setError(error.message);
        console.error(error);
      });
  };

  return (
    <div className="mt-10">
      <div>
        <h2 className="text-2xl font-medium text-center mb-4">Register Now</h2>
        <div className="flex justify-center">
          <form onSubmit={handleFormSubmit} className="flex w-[30%] flex-col">
            <div>
              <input
                className="py-2 border w-full border-secondary px-4"
                type="email"
                name="email"
                id="em"
                placeholder="Email"
                required
              />
            </div>
            <div className="relative">
              <input
                className="my-5 w-full py-2 border border-secondary px-4"
                type={showPassword ? "text" : "password"}
                name="password"
                id="pass"
                placeholder="Password"
                required
              />
              <div
                onClick={() => setShowPassword(!showPassword)}
                className="absolute translate-y-[-50%] translate-x-[-50%] top-[50%] right-0"
              >
                {showPassword ? (
                  <IoMdEye className="text-xl cursor-pointer"></IoMdEye>
                ) : (
                  <IoIosEyeOff className="text-xl cursor-pointer"></IoIosEyeOff>
                )}
              </div>
            </div>
            <div className="flex items-center gap-2 mb-8">
              <input type="checkbox" name="terms" id="terms" />
              <label htmlFor="terms">
                Accept our <a href="#">Terms & Conditions</a>
              </label>
            </div>
            <div>
              <input
                className="btn w-full btn-secondary"
                type="submit"
                value="Register"
              />
            </div>
            {error && <p className="text-red-600">{error}</p>}
            {success && <p className="text-green-400">{success}</p>}
            <p className="mt-2">
              Already have an account? Please{" "}
              <Link to="/login" className="text-secondary">
                Log in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
