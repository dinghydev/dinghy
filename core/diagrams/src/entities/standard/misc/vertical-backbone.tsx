import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VERTICAL_BACKBONE = {
  _style: {
    entity:
      'line;strokeWidth=4;direction=south;html=1;perimeter=backbonePerimeter;points=[];outlineConnect=0;',
  },
  _width: 10,
  _height: 160,
}

export function VerticalBackbone(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, VERTICAL_BACKBONE)} />
}
