import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TUMBLR = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.tumblr;fillColor=#588BBC;gradientColor=#172330',
  _width: 102.4,
  _height: 102.4,
}

export function Tumblr(props: DiagramNodeProps) {
  return <Shape {...TUMBLR} {...props} />
}
