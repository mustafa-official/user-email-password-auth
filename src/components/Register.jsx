import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase.config";

const Register = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const emailValue = e.target.email.value;
    const passValue = e.target.password.value;
    createUserWithEmailAndPassword(auth, emailValue, passValue)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="mt-10">
      <div>
        <h2 className="text-2xl font-medium text-center mb-4">Register Now</h2>
        <div className="flex justify-center">
          <form onSubmit={handleFormSubmit} className="flex w-[30%] flex-col">
            <input
              className="py-2 border border-secondary px-4"
              type="email"
              name="email"
              id="em"
              placeholder="Email"
            />
            <input
              className="my-5 py-2 border border-secondary px-4"
              type="password"
              name="password"
              id="pass"
              placeholder="Password"
            />
            <input
              className="btn btn-secondary"
              type="submit"
              value="Register"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
