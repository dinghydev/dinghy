import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SCHOOL_BUILDING = {
  _style: {
    entity:
      'image;points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;image=img/lib/allied_telesis/buildings/School_Building.svg;strokeColor=none;',
  },
  _original_width: 165,
  _original_height: 166.79999999999998,
}

export function SchoolBuilding(props: DiagramNodeProps) {
  return (
    <Shape
      {...SCHOOL_BUILDING}
      {...props}
      _style={extendStyle(SCHOOL_BUILDING, props)}
    />
  )
}
