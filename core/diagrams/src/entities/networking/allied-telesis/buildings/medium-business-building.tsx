import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MEDIUM_BUSINESS_BUILDING = {
  _style: {
    entity:
      'image;points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;image=img/lib/allied_telesis/buildings/Medium_Business_Building.svg;strokeColor=none;',
  },
  _original_width: 54.6,
  _original_height: 70.19999999999999,
}

export function MediumBusinessBuilding(props: DiagramNodeProps) {
  return (
    <Shape
      {...MEDIUM_BUSINESS_BUILDING}
      {...props}
      _style={extendStyle(MEDIUM_BUSINESS_BUILDING, props)}
    />
  )
}
