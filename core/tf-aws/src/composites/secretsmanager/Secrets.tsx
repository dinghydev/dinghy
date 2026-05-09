import { type NodeProps, Shape, toId } from '@dinghy/base-components'
import { AwsSecretsmanagerSecret } from '../../services/secretsmanager/AwsSecretsmanagerSecret.tsx'
import { parseSecrets, type SecretType } from './types.ts'

export function Secrets(props: NodeProps) {
  const secrets = parseSecrets(props.secrets as any)
  const SecretsComponent = props._components?.secrets as typeof Shape || Shape
  const SecretComponent =
    props._components?.secretsmanagerSecret as typeof AwsSecretsmanagerSecret ||
    AwsSecretsmanagerSecret
  return (
    <SecretsComponent _direction='vertical' {...props}>
      {Object.values(secrets).map((secret: SecretType) => (
        <SecretComponent
          key={secret.name}
          _id={toId(`awssecretsmanagersecret_${secret.name}`)}
          _title={secret.name}
          {...secret}
        />
      ))}
      {props.children}
    </SecretsComponent>
  )
}
