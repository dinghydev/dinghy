import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TERMINAL_BOARD = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.miscellaneous.terminal_board',
  },
  _width: 75,
  _height: 150,
}

export function TerminalBoard(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, TERMINAL_BOARD)} />
}
