import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BRAKE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;strokeWidth=1;shape=trapezoid;perimeter=none;',
  },
  _width: 75,
  _height: 25,
}

export function Brake(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, BRAKE)} />
}
