import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CELL_PHONE = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/cell_phone.svg;strokeColor=none;',
  },
  _width: 21,
  _height: 50,
}

export function CellPhone(props: DiagramNodeProps) {
  return (
    <Shape {...CELL_PHONE} {...props} _style={extendStyle(CELL_PHONE, props)} />
  )
}
