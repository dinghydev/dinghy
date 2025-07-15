import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BUSINESS_INTERACTION = {
  _style:
    'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#ffff99;shape=mxgraph.archimate.business;busType=interaction',
  _width: 100,
  _height: 75,
}

export function BusinessInteraction(props: DiagramNodeProps) {
  return <Shape {...BUSINESS_INTERACTION} {...props} />
}
