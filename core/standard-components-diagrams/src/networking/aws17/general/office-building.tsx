import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const OFFICE_BUILDING = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.office_building;fillColor=#7D7C7C;gradientColor=none;',
  },
  _original_width: 33,
  _original_height: 79.5,
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
