import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BUSINESS_INTERFACE_2 = {
  _style:
    'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#ffff99;shape=mxgraph.archimate.application;appType=interface2',
  _width: 100,
  _height: 75,
}

export function BusinessInterface2(props: DiagramNodeProps) {
  return <Shape {...BUSINESS_INTERFACE_2} {...props} />
}
