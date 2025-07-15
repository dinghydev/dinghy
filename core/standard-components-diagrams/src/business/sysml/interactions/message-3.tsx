import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MESSAGE_3 = {
  _style:
    'edgeStyle=none;html=1;endArrow=open;verticalAlign=bottom;endSize=12;endFill=1;dashed=1;',
  _width: 6,
  _height: 250,
}

export function Message3(props: DiagramNodeProps) {
  return <Shape {...MESSAGE_3} {...props} />
}
