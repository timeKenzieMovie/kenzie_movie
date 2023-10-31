import { Link } from "react-router-dom"
import { Input } from "../Input"

export const FormLogin = () => {

    return (
        <section>
            <h1 >Login</h1>
            <form >
                <Input
                    type="email"
                    id="email"
                    placeholder="E-mail"
                    {...register("email")}
                    error={errors.email}
                />
                <Input type="password"
                    placeholder="Senha"
                    {...register("password")}
                    error={errors.password}
                />
                <div>
                    <button type="submit">Entrar</button>
                    <p>ou</p>
                    <Link to={"/register"}><h3 type="submit" >Cadastre-se</h3></Link >
                </div>
            </form>
        </section>
    )
}