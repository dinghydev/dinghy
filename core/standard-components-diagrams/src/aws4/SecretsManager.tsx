import { Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SECRETS_MANAGER = {
  _color: { color: '#DD344C', fill: true },
  _border: 1,
  _shape: 'mxgraph.aws4.secrets_manager',
}

export function SecretsManager(props: DiagramNodeProps) {
  return <Shape {...SECRETS_MANAGER} {...props} />
}
