import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const INTERACTION = {
  _style:
    'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#99ffff;shape=mxgraph.archimate3.interaction;',
  _width: 40,
  _height: 40,
}

export function Interaction(props: DiagramNodeProps) {
  return <Shape {...INTERACTION} {...props} />
}
