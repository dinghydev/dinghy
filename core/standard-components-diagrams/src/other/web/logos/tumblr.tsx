import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TUMBLR = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.tumblr;fillColor=#36465D;strokeColor=none',
  _width: 40.6,
  _height: 65.2,
}

export function Tumblr(props: DiagramNodeProps) {
  return <Shape {...TUMBLR} {...props} />
}
