import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MESSAGE_8 = {
  _style:
    'html=1;strokeWidth=2;outlineConnect=0;dashed=0;align=center;fontSize=8;shape=mxgraph.eip.message_2;fillColor=#00cc00;fontStyle=1;whiteSpace=wrap;html=1;',
  _width: 2,
  _height: 30,
}

export function Message8(props: DiagramNodeProps) {
  return <Shape {...MESSAGE_8} {...props} />
}
