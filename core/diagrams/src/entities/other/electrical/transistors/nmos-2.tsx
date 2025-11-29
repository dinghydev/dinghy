import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const NMOS_2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.transistors.nmos;pointerEvents=1;',
  },
  _width: 60,
  _height: 100,
}

export function Nmos2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, NMOS_2)} />
}
