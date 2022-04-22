import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupSchema } from "../../helpers/validation";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signupSchema),
  });

  const onSubmit = (e) => {
    console.log("form data: ", e);
  };

  return (
    <>
      <div className="container" style={{marginTop: "30px"}}>
        <div className="card">
          <div className="card-header">
            Signup page
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  id="name"
                  type="name"
                  className="form-control"
                  placeholder="Enter Full Name"
                  {...register("name")}
                />
                {errors.name && (
                  <p className="text-danger">{errors.name?.message}</p>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  id="email"
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
                  id="pwd"
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

export default Signup;
