import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { BsArrowLeft } from "react-icons/bs"
import { Input } from "../../Input";
import { formRegisterSchema } from "./formRegisterSchema";
import { zodResolver } from "@hookform/resolvers/zod";

export const FormRegister = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(formRegisterSchema),
    });

    const submit = (formData) => {
        console.log(formData)
    }

    return (
        <>
            <section className={styles.register}>
                <header className={styles.header}>
                    <div className={styles.divHeader}>
                        <p className={styles.logo}>kenziemovie</p>
                        <Link to="/">
                            <button className={styles.buttonLogin}>Login</button>
                        </Link>
                    </div>
                    <div>
                        <Link to="/"><BsArrowLeft /> Voltar</Link>
                    </div>
                </header>
                <main>
                    <p className="paragraph">Preencha os campos para cadastrar-se</p>
                    <form className={styles.formRegister} onSubmit={handleSubmit(submit)}>
                        <div className={styles.divInputs}>
                            <Input
                                {...register("name")}
                                type="text"
                                placeholder="Nome"
                                errors={errors.name}
                            />
                            <Input
                                {...register("email")}
                                type="email"
                                placeholder="E-mail"
                                errors={errors.email}
                            />
                        </div>
                        <div className={styles.divInputs}>
                            <Input
                                {...register("password")}
                                type="password"
                                placeholder="Senha"
                                errors={errors.password}
                            />
                            <Input
                                {...register("confirm_password")}
                                type="password"
                                placeholder="Confirmar Senha"
                                errors={errors.confirm_password}
                            />
                        </div>
                        <button className={styles.registerButton} type="submit">Cadastrar-se</button>
                    </form>
                </main>
                <Footer />
            </section >
        </>
    )
}