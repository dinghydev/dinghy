import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TAPE = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.2d.tape;',
  },
  _width: 62,
  _height: 33.6,
}

export function Tape(props: DiagramNodeProps) {
  return <Shape {...TAPE} {...props} _style={extendStyle(TAPE, props)} />
}
