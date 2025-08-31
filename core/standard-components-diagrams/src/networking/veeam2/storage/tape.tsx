import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TAPE = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#005F4B;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.tape;',
  },
  _width: 38,
  _height: 22,
}

export function Tape(props: DiagramNodeProps) {
  return <Shape {...TAPE} {...props} _style={extendStyle(TAPE, props)} />
}
