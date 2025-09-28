import { UserRepositoryImpl } from "../infra/repositories/UserRepositoryImpl";
import { GetUserUseCase } from "../application/usecases/GetUserUseCase";
import { UserProfile } from "../presentation/components/UserProfile";
import { Technologies } from "../presentation/components/Technologies";
import { Contact } from "../presentation/components/Contact";
import { Projects } from "../presentation/components/Projects";
import { Certificates } from "../presentation/components/Certificates";

export default async function Home() {
  const userRepository = new UserRepositoryImpl();
  const getUserUseCase = new GetUserUseCase(userRepository);
  const user = await getUserUseCase.execute();

  // Gera 60 estrelas aleatórias
  const stars = Array.from({ length: 60 }).map((_, i) => {
    const size = Math.random() * 2 + 1;
    const top = Math.random() * 100;
    const left = Math.random() * 100;
    const duration = Math.random() * 2 + 1;
    return (
      <div
        key={i}
        className="star"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          top: `${top}vh`,
          left: `${left}vw`,
          animationDuration: `${duration}s`,
        }}
      />
    );
  });

  // Gera 12 cometas com posições e delays aleatórios
  const comets = Array.from({ length: 12 }).map((_, i) => {
    const left = Math.random() * 100;
    const delay = Math.random() * 6;
    return (
      <div
        key={i}
        className="comet"
        style={{ left: `${left}vw`, animationDelay: `${delay}s` }}
      />
    );
  });

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center gap-10 py-10 px-4">
      <div className="comet-bg">{comets}</div>
      <div className="animated-bg" />
      <div className="nebula" />
      <div className="stars">{stars}</div>
      <UserProfile user={user} />
      <Technologies technologies={user.technologies} />
      <Contact user={user} />
      <Projects />
      <Certificates />
    </div>
  );
}
