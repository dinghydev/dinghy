import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LARGE_BUILDING = {
  _style:
    'image;points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;image=img/lib/allied_telesis/buildings/Large_Building.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
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
