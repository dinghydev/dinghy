import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const HARDWARE_BOARD = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.hardware_board;fillColor=#5294CF;gradientColor=none;',
  },
  _width: 84,
  _height: 100.5,
}

export function HardwareBoard(props: NodeProps) {
  return (
    <Shape
      {...HARDWARE_BOARD}
      {...props}
      _style={extendStyle(HARDWARE_BOARD, props)}
    />
  )
}
