import React from "react";
import { Redirect } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { required } from "../../Utils/Validators/validators";
import { Input } from "../Common/FormsControl/FormsControl";
import style from "./Login.module.css";
import logo from "../../assets/images/logo192.png";
import classes from "../Common/FormsControl/FormsControl.module.css";
import Button from "../Common/Button/Button";
const LoginForm = (props) => {
  return (
    <form className={style.formInner} onSubmit={props.handleSubmit}>
      <div className={style.field}>
        <Field
          placeholder={"Login"}
          name={"email"}
          component={Input}
          validate={[required]}
        />
      </div>
      <div className={style.field}>
        <Field
          placeholder={"password"}
          name={"password"}
          component={Input}
          type={"password"}
          validate={[required]}
        />
      </div>
      <div className={style.inner}>
        <Button textBtn={"Sign in"} type={"submit"} />
        <div className={style.checkbox}>
          <Field
            component={Input}
            name={"rememberMe"}
            id={"rememberMe"}
            type={"checkbox"}
          />
          <label className={style.checkboxLabel} htmlFor={"rememberMe"}>
            remember me
          </label>
        </div>
      </div>
      {props.captchaURL && (
        <div>
          <img className={style.captcha} src={props.captchaURL} />
          <Field component={Input} name={"captcha"} />
        </div>
      )}
      {props.error && (
        <div className={classes.formCommonError}>{props.error}</div>
      )}
    </form>
  );
};
const LoginFormConteiner = reduxForm({ form: "login" })(LoginForm);

const Login = (props) => {
  const onSubmit = (data) => {
    props.login(data);
  };

  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }

  return (
    <div className={style.form}>
      <img className={style.logo} src={logo} />
      <h1 className={style.formTitle}>Social network</h1>
      <LoginFormConteiner onSubmit={onSubmit} captchaURL={props.captchaURL} />
    </div>
  );
};
export default Login;