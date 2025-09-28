import { User } from "../../domain/entities/User";
import { UserRepository } from "../../domain/repositories/UserRepository";

export class GetUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(): Promise<User> {
    return this.userRepository.getUser();
  }
}
