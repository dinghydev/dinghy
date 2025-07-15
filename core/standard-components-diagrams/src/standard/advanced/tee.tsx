import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TEE = {
  _style: 'shape=tee;whiteSpace=wrap;html=1;',
  _width: 80,
  _height: 80,
}

export function Tee(props: DiagramNodeProps) {
  return <Shape {...TEE} {...props} />
}
