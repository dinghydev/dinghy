import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BUSINESS_EVENT = {
  _style:
    'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#ffff99;shape=mxgraph.archimate.business;busType=event',
  _width: 100,
  _height: 75,
}

export function BusinessEvent(props: DiagramNodeProps) {
  return <Shape {...BUSINESS_EVENT} {...props} />
}
