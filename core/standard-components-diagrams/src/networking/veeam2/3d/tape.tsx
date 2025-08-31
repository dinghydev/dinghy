import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TAPE = {
  _style: {
    entity:
      'sketch=0;shadow=0;dashed=0;html=1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.3d.tape;',
  },
  _width: 60,
  _height: 60,
}

export function Tape(props: DiagramNodeProps) {
  return <Shape {...TAPE} {...props} _style={extendStyle(TAPE, props)} />
}
