import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const OFFICE_BUILDING = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;strokeColor=#232F3E;fillColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.office_building;',
  },
  _width: 60,
  _height: 60,
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
