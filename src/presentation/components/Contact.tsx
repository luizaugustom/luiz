import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";
import { User } from "../../domain/entities/User";

interface Props {
  user: User;
}

export function Contact({ user }: Props) {
  return (
    <section className="w-full max-w-3xl mx-auto flex flex-col gap-4 p-6 bg-black/60 rounded-xl shadow-lg animate-fade-in">
      <h2 className="text-2xl font-bold text-title-light mb-4 text-center">Contact</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-200 text-lg justify-items-center items-center">
        <div className="flex flex-col gap-2 items-center text-center">
          <div className="flex items-center gap-2"><FaEnvelope /> <span>{user.email}</span></div>
          <div className="flex items-center gap-2"><FaPhone /> <span>{user.phone}</span></div>
        </div>
        <div className="flex flex-col gap-2 items-center text-center">
          {user.linkedin && (
            <div className="flex items-center gap-2"><FaLinkedin /> <a href={user.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-200 underline">LinkedIn</a></div>
          )}
          {user.github && (
            <div className="flex items-center gap-2"><FaGithub /> <a href={user.github} target="_blank" rel="noopener noreferrer" className="text-gray-200 underline">GitHub</a></div>
          )}
        </div>
      </div>
    </section>
  );
}
