import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SMALL_BUSINESS = {
  _style:
    'shape=mxgraph.cisco.buildings.small_business;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 98,
  _height: 54,
}

export function SmallBusiness(props: DiagramNodeProps) {
  return <Shape {...SMALL_BUSINESS} {...props} />
}
