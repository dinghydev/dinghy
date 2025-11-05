import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const HARDWARE_BOARD = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#7AA116;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.hardware_board;',
  },
  _original_width: 78,
  _original_height: 78,
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
