import { getRenderOptions } from '@dinghy/base-components'
import { z } from 'zod'
import { InputSchema as AwsSecretsmanagerSecretInputSchema } from '../../services/secretsmanager/AwsSecretsmanagerSecret.tsx'

const SecretSchema = AwsSecretsmanagerSecretInputSchema
const SecretsSchema = z.record(z.string(), SecretSchema.loose().partial())

export type SecretType = z.output<typeof SecretSchema> & { name: string }

export function parseSecrets(
  secrets?: any,
): Record<string, SecretType> {
  const renderOptions = getRenderOptions()
  const cfg = secrets || (renderOptions as any).secrets
  if (!cfg) {
    throw new Error('secrets not configured')
  }
  const parsed = SecretsSchema.parse(cfg) as Record<string, any>
  for (const [name, secret] of Object.entries(parsed)) {
    secret.name ??= name
  }
  return parsed as Record<string, SecretType>
}
