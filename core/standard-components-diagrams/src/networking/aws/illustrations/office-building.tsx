import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const OFFICE_BUILDING = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;gradientColor=none;fontColor=#545B64;strokeColor=none;fillColor=#879196;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.illustration_office_building;pointerEvents=1',
  },
  _original_width: 100,
  _original_height: 71,
}

export function OfficeBuilding(props: DiagramNodeProps) {
  return (
    <Shape
      {...OFFICE_BUILDING}
      {...props}
      _style={extendStyle(OFFICE_BUILDING, props)}
    />
  )
}
