import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const QUEUE = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.queue;fillColor=#D9A741;gradientColor=none;',
  _width: 73.5,
  _height: 48,
}

export function Queue(props: DiagramNodeProps) {
  return <Shape {...QUEUE} {...props} />
}
