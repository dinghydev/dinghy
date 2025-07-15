import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FORK_NODE = {
  _style:
    'shape=rect;html=1;fillColor=strokeColor;verticalLabelPosition=bottom;verticalAlignment=top;',
  _width: 200,
  _height: 80,
}

export function ForkNode(props: DiagramNodeProps) {
  return <Shape {...FORK_NODE} {...props} />
}
