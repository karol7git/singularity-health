import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const isFormValid = email.includes("@") && password.length >= 6;

  const handleLogin = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);
    setMsg("");

    try {
      const res = await axios.post("https://reqres.in/api/login", {
        email,
        password,
      });
      setMsg("Login Successful!");
      console.log(`Login successful! Token: ${res.data.token}`);
      navigate("/home");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setMsg(
          "Login failed: " + (error.response?.data?.error || error.message)
        );
      } else if (error instanceof Error) {
        setMsg("Login failed: " + error.message);
      } else {
        setMsg("Login failed: An unknown error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left Section */}
      <div className="flex flex-col items-center justify-center w-1/2 bg-custom-orange relative">
        <svg
          className="absolute inset-0 h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 800 600"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C150,300 450,300 800,600 L800,0 Z" fill="#FF5A5F" />
          <path
            d="M0,0 C200,200 400,0 800,600 L800,0 Z"
            fill="#FF6B6B"
            opacity="0.7"
          />
        </svg>
        <div className="relative bg-white p-8 rounded-full z-10">
          <svg
            width="64"
            height="64"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2C10.8954 2 10 2.89543 10 4V5H7C5.89543 5 5 5.89543 5 7V17C5 18.1046 5.89543 19 7 19H17C18.1046 19 19 18.1046 19 17V7C19 5.89543 18.1046 5 17 5H14V4C14 2.89543 13.1046 2 12 2ZM7 7H17V17H7V7Z"
              fill="#FF5A5F"
            />
            <circle cx="8.5" cy="10.5" r="1.5" fill="black" />
            <circle cx="15.5" cy="10.5" r="1.5" fill="black" />
            <path
              d="M12 15C12.8284 15 13.5 14.3284 13.5 13.5H10.5C10.5 14.3284 11.1716 15 12 15Z"
              fill="black"
            />
          </svg>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col justify-center w-1/2 px-12">
        <h2 className="text-3xl font-bold text-gray-800 border-l-4 border-custom-orange pl-2 mb-2">
          WELCOME
        </h2>
        <form className="flex flex-col gap-4" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            className="p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {!email.includes("@") && email && (
            <p className="text-red-500 text-sm">Enter valid email</p>
          )}
          <input
            type="password"
            placeholder="Contraseña"
            className="p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {password && password.length < 6 && (
            <p className="text-red-500 text-sm">
              The password must be at least 6 characters.
            </p>
          )}
          <a href="#" className="text-sm text-gray-500 text-right">
            ¿Forgot your password?
          </a>
          <button
            type="submit"
            disabled={!isFormValid || loading}
            className={`p-4 mt-4 rounded-full transition ${
              isFormValid ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-300"
            } text-white`}
          >
            {loading ? "Cargando..." : "INICIAR SESIÓN"}
          </button>
        </form>
        <div className="text-center mt-4">
          <span className="text-gray-500">¿No account yet?</span>
          <a href="#" className="text-blue-500 font-semibold">
            REGISTER
          </a>
        </div>
        {msg && <p className="mt-4 text-center">{msg}</p>}
      </div>
    </div>
  );
}
