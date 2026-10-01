import 'reflect-metadata';

import { Registry } from '@kernel/di/Registry';
import { lambdaHttpAdapter } from '@main/adapters/lambdaHttpAdapter';
import { SignInController } from '@application/controllers/auth/SignInController';

const controller = Registry.getInstace().resolve(SignInController);

export const handler = lambdaHttpAdapter(controller);
