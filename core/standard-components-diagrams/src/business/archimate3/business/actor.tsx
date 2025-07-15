import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ACTOR = {
  _style:
    'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#ffff99;verticalLabelPosition=bottom;verticalAlign=top;align=center;shape=mxgraph.archimate3.actor;',
  _width: 26.5,
  _height: 50,
}

export function Actor(props: DiagramNodeProps) {
  return <Shape {...ACTOR} {...props} />
}
