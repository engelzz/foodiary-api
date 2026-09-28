import 'reflect-metadata';

import { SignUpController } from '@application/controllers/auth/SignUpController';
import { Registry } from '@kernel/di/Registry';
import { lambdaHttpAdapter } from '@main/adapters/lambdaHttpAdapter';

const controller = Registry.getInstace().resolve(SignUpController);

export const handler = lambdaHttpAdapter(controller);
