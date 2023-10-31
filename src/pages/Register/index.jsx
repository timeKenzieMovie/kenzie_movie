import { Input } from "../../components/Input";
import { useForm } from "react-hook-form";
import {BsArrowLeft} from "react-icons/bs"

export const RegisterPage = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const submit = (formData) => {
        console.log(formData)
    }

    return (
        <>
            <Header />
            <main>
                <div>
                    <div>
                        <h2>Cadastro</h2>
                        <p>Preencha os campos para cadastrar-se</p>
                    </div>
                    <div>
                        <Link to="/"><BsArrowLeft/> Voltar</Link>
                    </div>
                </div>
                <form onSubmit={handleSubmit(submit)}>
                    <div>
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
                    <button type="submit">Cadastrar-se</button>
                </form>
            </main>
            <Footer/>
        </>
    )
}