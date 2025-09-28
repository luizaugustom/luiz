interface GithubRepo {
  name: string;
  html_url: string;
  description?: string;
  language?: string;
}

export async function fetchGithubProjects(username: string) {
  const res = await fetch(`https://api.github.com/users/${username}/repos?sort=updated`);
  if (!res.ok) throw new Error('Erro ao buscar projetos do GitHub');
  const data: GithubRepo[] = await res.json();
  return data.map((repo) => ({
    name: repo.name,
    url: repo.html_url,
    description: repo.description,
    language: repo.language,
  }));
}
