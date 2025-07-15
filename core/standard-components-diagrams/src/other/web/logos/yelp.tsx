import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const YELP = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.yelp;fillColor=#C41200;strokeColor=none',
  _width: 63.400000000000006,
  _height: 83,
}

export function Yelp(props: DiagramNodeProps) {
  return <Shape {...YELP} {...props} />
}
