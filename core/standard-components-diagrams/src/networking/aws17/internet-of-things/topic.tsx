import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TOPIC = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.topic;fillColor=#5294CF;gradientColor=none;',
  _width: 49.5,
  _height: 66,
}

export function Topic(props: DiagramNodeProps) {
  return <Shape {...TOPIC} {...props} />
}
