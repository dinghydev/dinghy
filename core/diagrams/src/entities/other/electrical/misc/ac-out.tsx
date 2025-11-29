import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const AC_OUT = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.miscellaneous.ac_out',
  },
  _width: 200,
  _height: 100,
}

export function AcOut(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, AC_OUT)} />
}
