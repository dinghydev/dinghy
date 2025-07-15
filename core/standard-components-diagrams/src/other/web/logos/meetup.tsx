import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MEETUP = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.meetup;fillColor=#413E3E;strokeColor=none',
  _width: 74.8,
  _height: 30,
}

export function Meetup(props: DiagramNodeProps) {
  return <Shape {...MEETUP} {...props} />
}
