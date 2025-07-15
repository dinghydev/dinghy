import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TERMINAL_BOARD = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.miscellaneous.terminal_board',
  _width: 75,
  _height: 150,
}

export function TerminalBoard(props: DiagramNodeProps) {
  return <Shape {...TERMINAL_BOARD} {...props} />
}
