import { Link, useNavigate } from "react-router-dom"
import { Input } from "../../Input"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { formLoginSchema } from "./formLoginSchema"
import styles from "./style.module.scss"


export const FormLogin = () => {
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(formLoginSchema),
    })

    const onSubmit = (formData) => {
        console.log(formData)
    }

    const handleClick = () => {
        navigate('/home')
    }
    return (
        <>
            <section className={styles.formLogin}>
                <h1 className="title1">Login</h1>
                <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    <Input className="input login"
                        type="email"
                        id="email"
                        placeholder="E-mail"
                        {...register("email")}
                        error={errors.email}
                    />
                    <Input className="input login" type="password"
                        placeholder="Senha"
                        {...register("password")}
                        error={errors.password}
                    />
                </form>
                <div className={styles.divRegisterLogin}>
                    <button className={styles.buttonLogin} onClick={handleClick}>Entrar</button>

                    <p className="paragraph">ou</p>
                    <Link className="menuItem link" to={"/register"}><h3 type="submit" >Cadastre-se</h3></Link >
                </div>
            </section>
        </>
    )
}