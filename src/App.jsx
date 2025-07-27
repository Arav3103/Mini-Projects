import "./App.css";
import LoginForm from "./components/LoginForm";
import UserDashboard from "./components/UserDashboard";
import UserType from "./components/UserType";
import LoginProvider from "./context/LoginProvider";

function App() {
  return (
    <section>
      <h1>User Login Form</h1>
      <LoginProvider>
        <LoginForm />
        <UserDashboard />
        <UserType />
      </LoginProvider>
    </section>
  );
}

export default App;
