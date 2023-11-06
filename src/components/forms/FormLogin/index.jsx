import { Link, useNavigate } from "react-router-dom"
import { Input } from "../../Input"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { formLoginSchema } from "./formLoginSchema"
import styles from "./style.module.scss"
import { useContext } from "react"
import { UserContext } from "../../../providers/UserContext"
import { api } from "../../../services/api"


export const FormLogin = () => {

    const { setUser } = useContext(UserContext)

    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(formLoginSchema),
    })

    const submit = async (formData) => {
        try {
            const { data } = await api.post("login", formData);
            localStorage.setItem("@TOKEN", data.accessToken);
            localStorage.setItem("@USERID", data.user.id);

            setUser(data.user);
            navigate("/");
            // toast.success("Vamos entrando.");
        } catch (error) {
            // toast.error("Algo deu errado...");
            console.log(error.message)
        }
    }

    return (
        <>
            <section className={styles.formLogin}>
                <h1 className="title1">Login</h1>
                <form className={styles.form} onSubmit={handleSubmit(submit)}>
                    <Input className="input login"
                        type="email"
                        id="email"
                        placeholder="E-mail"
                        {...register("email")}
                        error={errors.email}
                    />
                    <Input className="input login"
                        type="password"
                        placeholder="Senha"
                        {...register("password")}
                        error={errors.password}
                    />
                    <button className={styles.buttonLogin}>Entrar</button>
                </form>
                <div className={styles.divRegisterLogin}>

                    <p className="paragraph">ou</p>
                    <Link className="menuItem link" to={"/register"}><h3 type="submit" >Cadastre-se</h3></Link >
                </div>
            </section>
        </>
    )
}