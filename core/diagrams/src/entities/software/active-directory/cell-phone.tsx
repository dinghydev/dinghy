import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CELL_PHONE = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/cell_phone.svg;strokeColor=none;',
  },
  _width: 21,
  _height: 50,
}

export function CellPhone(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CELL_PHONE)} />
}
