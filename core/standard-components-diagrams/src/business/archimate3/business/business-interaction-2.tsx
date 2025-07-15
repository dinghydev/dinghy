import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BUSINESS_INTERACTION_2 = {
  _style:
    'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#ffff99;shape=mxgraph.archimate3.interaction;',
  _width: 40,
  _height: 40,
}

export function BusinessInteraction2(props: DiagramNodeProps) {
  return <Shape {...BUSINESS_INTERACTION_2} {...props} />
}
