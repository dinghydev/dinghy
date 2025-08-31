import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TERMINAL_4MM2_X10 = {
  _style:
    'verticalLabelPosition=bottom;dashed=0;shadow=0;html=1;align=center;verticalAlign=top;shape=mxgraph.cabinets.terminal_4mm2_x10;',
  _width: 25,
  _height: 25,
}

export function Terminal4mm2X10(props: DiagramNodeProps) {
  return (
    <Shape
      {...TERMINAL_4MM2_X10}
      {...props}
      _style={extendStyle(TERMINAL_4MM2_X10, props)}
    />
  )
}
