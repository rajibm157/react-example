import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../helpers/validation";
import { login, showLoading, checkLogin } from "../../actions/authActions";

function Login(props) {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (e) => {
    dispatch(showLoading());
    dispatch(login(e));
    dispatch(checkLogin());
    //props.history.push("/");
  };

  return (
    <>
      <div className="container" style={{ marginTop: "30px" }}>
        <div className="card">
          <div className="card-header">Login </div>
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-danger">{errors.email?.message}</p>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="pwd">Password:</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  {...register("password")}
                />
                {errors.password && (
                  <p className="text-danger">{errors.password?.message}</p>
                )}
              </div>
              <div className="checkbox">
                <label>
                  <input type="checkbox" name="remember" /> Remember me
                </label>
              </div>
              <button type="submit" className="btn btn-default btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
