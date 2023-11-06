import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Input } from "../../Input";
import { formRegisterSchema } from "./formRegisterSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import styles from "./style.module.scss";
import { api } from "../../../services/api";

export const FormRegister = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(formRegisterSchema)
    });

    const navigate = useNavigate();

    const submit = async (formData) => {
        try {
            await api.post("users", formData);
            // toast.sucess("Cadastro realizado");
            navigate("/login")
        } catch (error) {
            console.log(error.message);
            // toast.error("deu ruim");
        }
    }

    return (

        <>
            <form onSubmit={handleSubmit(submit)} className={styles.formRegister}>
                <div className={styles.divInputs}>
                    <Input
                        type="text"
                        {...register("name")}
                        placeholder="Nome"
                        errors={errors.name}
                    />
                    <Input
                        type="email"
                        {...register("email")}
                        placeholder="E-mail"
                        errors={errors.email}
                    />
                    <Input
                        type="password"
                        {...register("password")}
                        placeholder="Senha"
                        errors={errors.password}
                    />
                    <Input
                        type="password"
                        {...register("confirmPassword")}
                        placeholder="Confirmar Senha"
                        errors={errors.confirmPassword}
                    />
                </div>
                <button className={styles.registerButton} type="submit">Cadastrar-se</button>
            </form>
        </>
    )
}