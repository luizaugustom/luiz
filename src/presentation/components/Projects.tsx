"use client";

import { useEffect, useState } from "react";
import { fetchGithubProjects } from "../../infra/services/githubService";

export function Projects() {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchGithubProjects("luizaugustom")
      .then(setProjects)
      .catch(() => setError("Erro ao buscar projetos do GitHub."))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <section className="w-full max-w-3xl mx-auto flex flex-col gap-4 p-6 bg-black/60 rounded-xl shadow-lg animate-fade-in">
        <h2 className="text-2xl font-bold text-title-light mb-4 text-center">See my projects</h2>
        <div className="text-gray-400 text-center">loading my projects...</div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="w-full max-w-3xl mx-auto flex flex-col gap-4 p-6 bg-black/60 rounded-xl shadow-lg animate-fade-in">
        <h2 className="text-2xl font-bold text-title-light mb-4 text-center">See my projects</h2>
        <div className="text-red-400 text-center">{error}</div>
      </section>
    );
  }

  if (!projects || projects.length === 0) {
    return (
      <section className="w-full max-w-3xl mx-auto flex flex-col gap-4 p-6 bg-black/60 rounded-xl shadow-lg animate-fade-in">
        <h2 className="text-2xl font-bold text-title-light mb-4 text-center">See my projects</h2>
        <div className="text-gray-400 text-center">Nenhum projeto encontrado no GitHub.</div>
      </section>
    );
  }

  return (
    <section className="w-full max-w-3xl mx-auto flex flex-col gap-4 p-6 bg-black/60 rounded-xl shadow-lg animate-fade-in">
      <h2 className="text-2xl font-bold text-title-light mb-4 text-center">See my projects</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((project) => (
          <li key={project.url}>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-[#7c3aed]/60 text-white font-semibold rounded-lg py-3 px-4 text-center shadow-md hover:bg-[#5b23b6]/80 transition-colors"
            >
              {project.name}
            </a>
            {/* Removido: descrição do projeto */}
          </li>
        ))}
      </ul>
    </section>
  );
}
