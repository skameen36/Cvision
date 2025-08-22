import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { usePuterStore } from "~/lib/puter";

export const meta = () => [
  { title: "Cvision - Auth" },
  { name: "description", content: "Auth page for Cvision" },
];

const Auth = () => {
  const location = useLocation();
  const next = location.search.split("next=")[1];
  const navigate = useNavigate();

  const { isLoading, auth } = usePuterStore();

  useEffect(() => {
    if (auth.isAuthenticated) navigate(next);
  }, [auth.isAuthenticated, next]);

  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover min-h-screen flex items-center justify-center">
      <div className="gradient-border shadow-lg">
        <section className="flex flex-col gap-8 bg-white rounded-2xl p-10 ">
          <div className="flex flex-col gap-2 items-center text-center">
            <h1>welcome</h1>
            <h2>Sign in to your account</h2>
            <p>Access your dashboard and manage your resume reviews.</p>
          </div>
          <div>
            {isLoading ? (
              <button className="auth-button animate-pulse">
                <p>sign in</p>
              </button>
            ) : (
              <>
                {auth.isAuthenticated ? (
                  <button className="auth-button" onClick={auth.signOut}>
                    Log Out
                  </button>
                ) : (
                  <button className="auth-button" onClick={auth.signIn}>
                    Log In
                  </button>
                )}
              </>
            )}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Auth;
