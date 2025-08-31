import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AC_OUT = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.miscellaneous.ac_out',
  _width: 200,
  _height: 100,
}

export function AcOut(props: DiagramNodeProps) {
  return <Shape {...AC_OUT} {...props} _style={extendStyle(AC_OUT, props)} />
}
