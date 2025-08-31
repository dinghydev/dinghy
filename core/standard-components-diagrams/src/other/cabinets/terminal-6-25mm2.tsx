import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TERMINAL_6_25MM2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;dashed=0;shadow=0;html=1;align=center;verticalAlign=top;shape=mxgraph.cabinets.terminal_6_25mm2;',
  },
  _width: 5,
  _height: 37.5,
}

export function Terminal625mm2(props: DiagramNodeProps) {
  return (
    <Shape
      {...TERMINAL_6_25MM2}
      {...props}
      _style={extendStyle(TERMINAL_6_25MM2, props)}
    />
  )
}
