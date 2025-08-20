import type { Route } from "./+types/home";
import  Navbar  from "../components/Navbar";
import type { Key } from "react";
import { resumes } from "../../constants/index";
import ResumeCard from "~/components/ResumeCard";



export function meta({}: Route.MetaArgs) {
  return [
    { title: "Cvision" },
    { name: "description", content: "clear AI-powered resume insight!" },
  ];
}

export default function Home() {
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
            <Navbar />
            <section className="main-section"> 
              <div className="page-heading">
                <h1>Track Your Applications & Resume Ratings</h1>
                <h2>Review your submissions and check AI-powered feedback.</h2>
              </div>


              {resumes.length > 0 && (
                <div className="resumes-section">
                      {resumes.map((resume : Resume) => (
                        <ResumeCard key={resume.id} resume={resume}/>
                      ))}
                </div>
              )}

            </section>
         </main>;
}
