import Image from "next/image";
import { User } from "../../domain/entities/User";

interface Props {
  user: User;
}

export function UserProfile({ user }: Props) {
  return (
    <section className="w-full max-w-3xl mx-auto flex flex-col items-center gap-8 p-6 bg-black/60 rounded-xl shadow-lg animate-fade-in">
      <Image
        src={user.photoUrl}
        alt={user.name}
        width={160}
        height={160}
        className="rounded-full border-4 border-black shadow-lg mb-4"
        unoptimized
      />
      <div className="flex flex-col items-center" style={{ gap: "0px" }}>
        <h1 className="text-3xl font-bold text-title-light mb-0 text-center" style={{marginBottom: '0px'}}>
          {user.name}
        </h1>
        <div
          className="text-lg font-medium text-[#7c3aed] text-center animate-text-glow"
          style={{ marginTop: "0px" }}
        >
          Software Engineer since 2023
        </div>
      </div>
      <div className="w-full text-lg text-gray-200 text-center min-h-[80px]">
        {user.description}
      </div>
      <div className="w-full text-base text-gray-400 text-center min-h-[40px] mt-2">
        {/* Novo espaço para texto adicional */}
        {user.extraText}
      </div>
    </section>
  );
}
