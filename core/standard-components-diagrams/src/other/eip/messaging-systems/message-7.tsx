import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MESSAGE_7 = {
  _style:
    'html=1;strokeWidth=2;outlineConnect=0;dashed=0;align=center;fontSize=8;shape=mxgraph.eip.message_1;fillColor=#ff5500;fontStyle=1;whiteSpace=wrap;html=1;',
  _width: 2,
  _height: 30,
}

export function Message7(props: DiagramNodeProps) {
  return <Shape {...MESSAGE_7} {...props} />
}
