import _jetEnv from 'jet-env';
import { isEnumVal } from 'jet-validators';

const jetEnv = _jetEnv.default || _jetEnv;

export const NodeEnvs = {
  Development: 'development',
  Production: 'production',
  Test: 'test',
};

