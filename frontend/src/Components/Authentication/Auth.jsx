import { useEffect } from "react";
import classes from "./Auth.module.css";
import {
  Form,
  Link,
  useSearchParams,
  useNavigate,
  useNavigation,
  redirect,
  useActionData,
} from "react-router-dom";
import { getDuration } from "../../util/token";

export default function Auth() {
  const data = useActionData();
  const navigation = useNavigation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const mode = searchParams.get("mode");
  const isLogin = mode === "login";
  const isSubmitting = navigation.state === "submitting";

  useEffect(() => {
    if (mode !== "login" && mode !== "signup") {
      navigate("/auth?mode=login", { replace: true });
    }
  }, [mode, navigate]); // this will navigate to signup when the user clicks first time (that time there will be no mode, as we are not setting it.)

  return (
    <div className={classes.container}>
      <div className={classes.formContainer}>
        <Form method="POST">
          <h1>{isLogin ? "Login" : "Signup"}</h1>
          <p style={{ textAlign: "center" }}>
            Log in to view our Blogs and Services
          </p>
          <p className={classes.errorText + " " + classes.center}>
            {data && data.message}
          </p>
          <div className={classes.inputContainer}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="eg johndoe@gmail.com"
              id="email"
            />
            <p className={classes.errorText + " " + classes.inputError}>
              {data && data.errors && data.errors.email}
            </p>
          </div>
          <div>
            <label htmlFor="password" onClick={() => getDuration()}>
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="enter your password"
            />
            <p className={classes.errorText + " " + classes.inputError}>
              {data && data.errors && data.errors.password}
            </p>
          </div>
          <button type="submit" className={classes.submitBtn}>
            {isLogin
              ? isSubmitting
                ? "Logging In..."
                : "Login"
              : isSubmitting
              ? "Submitting..."
              : "Signup"}
          </button>
          <Link
            to={`?mode=${isLogin ? "signup" : "login"}`}
            type="button"
            className={classes.change}
          >
            {isLogin ? "First time here?" : "Already a user?"}{" "}
            <span className={classes.changeModeBtn}>
              {isLogin ? "Signup Now" : "Login here"}
            </span>
          </Link>
        </Form>
      </div>
    </div>
  );
}

export const authAction = async ({ request }) => {
  const formData = await request.formData();
  const user = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const searchParmams = new URL(request.url).searchParams;
  const mode = searchParmams.get("mode") || "signup";

  if (mode !== "login" && mode !== "signup") {
    throw new Error("unSupported mode of request");
  }
  const response = await fetch("http://localhost:8080/" + mode, {
    method: "POST",
    headers: {
      "Content-Type": "Application/json",
    },
    body: JSON.stringify(user),
  });

  if (response.status === 422 || response.status === 401) {
    return response;
  }

  if (!response.ok) {
    throw new Error("can not " + mode);
  }

  const data = await response.json();
  const token = data.token;
  localStorage.setItem("token", token);

  const date = new Date();
  date.setHours(date.getHours() + 20);
  localStorage.setItem("expiration", date.toISOString());
  return redirect("/");
};
