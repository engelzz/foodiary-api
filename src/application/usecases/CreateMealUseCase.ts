import { Injectable } from '@kernel/decorators/injectable';

@Injectable()
export class CreateMealUseCase {
  async execute(
    input: CreateMealUseCase.Input,
  ): Promise<CreateMealUseCase.Output> {
    return {
      message: input.email,
    };
  }
}

export namespace CreateMealUseCase {
  export type Input = {
    email: string;
  };

  export type Output = {
    message: string;
  };
}
