import { Injectable } from '@kernel/decorators/injectable';

@Injectable()
export class HelloUseCase {
  async execute(input: HelloUseCase.Input): Promise<HelloUseCase.Output> {
    return {
      message: input.email,
    };
  }
}

export namespace HelloUseCase {
  export type Input = {
    email: string;
  };

  export type Output = {
    message: string;
  };
}
