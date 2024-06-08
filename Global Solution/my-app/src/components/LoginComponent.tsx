import { signIn, signOut, useSession } from "next-auth/react";

export default function LoginComponent() {
    const { data: session } = useSession();

    if (session?.user) {
        return (
            <div>
                <p>Bem-vindo, {session.user.name}!</p>
                <button onClick={() => signOut()}>Sair</button>
            </div>
        );
    }

    return (
        <button onClick={() => signIn('google')}>Login com Google</button>
    );
}
