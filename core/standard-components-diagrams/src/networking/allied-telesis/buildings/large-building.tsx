import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LARGE_BUILDING = {
  _style: {
    entity:
      'image;points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;image=img/lib/allied_telesis/buildings/Large_Building.svg;strokeColor=none;',
  },
  _original_width: 75,
  _original_height: 75,
}

export function LargeBuilding(props: DiagramNodeProps) {
  return (
    <Shape
      {...LARGE_BUILDING}
      {...props}
      _style={extendStyle(LARGE_BUILDING, props)}
    />
  )
}
