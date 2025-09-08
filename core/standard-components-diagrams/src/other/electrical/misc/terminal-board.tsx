import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TERMINAL_BOARD = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.miscellaneous.terminal_board',
  },
  _original_width: 75,
  _original_height: 150,
}

export function TerminalBoard(props: DiagramNodeProps) {
  return (
    <Shape
      {...TERMINAL_BOARD}
      {...props}
      _style={extendStyle(TERMINAL_BOARD, props)}
    />
  )
}
