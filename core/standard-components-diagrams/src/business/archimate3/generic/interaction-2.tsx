import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const INTERACTION_2 = {
  _style:
    'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#EBEBEB;shape=mxgraph.archimate3.interaction;',
  _width: 45,
  _height: 45,
}

export function Interaction2(props: DiagramNodeProps) {
  return <Shape {...INTERACTION_2} {...props} />
}
