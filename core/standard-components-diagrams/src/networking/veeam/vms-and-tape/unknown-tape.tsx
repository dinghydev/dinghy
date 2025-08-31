import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const UNKNOWN_TAPE = {
  _style:
    'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.unknown_tape;',
  _width: 67.2,
  _height: 62.4,
}

export function UnknownTape(props: DiagramNodeProps) {
  return (
    <Shape
      {...UNKNOWN_TAPE}
      {...props}
      _style={extendStyle(UNKNOWN_TAPE, props)}
    />
  )
}
