import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TEE = {
  _style: {
    entity: 'shape=tee;whiteSpace=wrap;html=1;',
  },
  _width: 60,
  _height: 60,
}

export function Tee(props: DiagramNodeProps) {
  return <Shape {...TEE} {...props} _style={extendStyle(TEE, props)} />
}
