import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MESSAGE_EXPIRATION = {
  _style:
    'strokeWidth=3;outlineConnect=0;dashed=0;align=center;fontSize=8;shape=mxgraph.eip.messExp;html=1;verticalLabelPosition=bottom;verticalAlign=top',
  _width: 48,
  _height: 48,
}

export function MessageExpiration(props: DiagramNodeProps) {
  return <Shape {...MESSAGE_EXPIRATION} {...props} />
}
