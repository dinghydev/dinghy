import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TEE = {
  _style: {
    entity: 'shape=tee;whiteSpace=wrap;html=1;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function Tee(props: DiagramNodeProps) {
  return <Shape {...TEE} {...props} _style={extendStyle(TEE, props)} />
}
