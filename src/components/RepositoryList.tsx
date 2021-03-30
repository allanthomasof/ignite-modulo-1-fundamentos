import { useState, useEffect } from "react";
import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';

interface Repository {
  name: string;
  description: string;
  html_url: string;
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  // useEffect é um HOOK.
  // Sempre que a variavel repositores mudar, executa a arrow function. (Parecido com o watch do VueJS)
  // Dica2 (Mounted): Se eu rodar o useEffect sem o segundo parâmetro, que é o array de variáveis, ele vai ser executado somente uma vez quando o componente for criado e morre alí.
  useEffect(() => {
    fetch('https://api.github.com/users/allanthomasof/repos')
      .then(response => response.json())
      .then(data => setRepositories(data))
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>
      <ul>
        {repositories.map(repository => {
          return <RepositoryItem key={repository.name} repository={repository}/>
        })}
      </ul>
    </section>
  )
}