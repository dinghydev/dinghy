import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const OFFICE_BUILDING = {
  _style:
    'sketch=0;outlineConnect=0;gradientColor=none;fontColor=#545B64;strokeColor=none;fillColor=#879196;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.illustration_office_building;pointerEvents=1',
  _width: 100,
  _height: 71,
}

export function OfficeBuilding(props: DiagramNodeProps) {
  return <Shape {...OFFICE_BUILDING} {...props} />
}
