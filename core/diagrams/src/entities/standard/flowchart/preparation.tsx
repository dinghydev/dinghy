import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PREPARATION = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=hexagon;perimeter=hexagonPerimeter2;arcSize=6;size=0.27;',
  },
  _width: 100,
  _height: 60,
}

export function Preparation(props: NodeProps) {
  return (
    <Shape
      {...PREPARATION}
      {...props}
      _style={extendStyle(PREPARATION, props)}
    />
  )
}
