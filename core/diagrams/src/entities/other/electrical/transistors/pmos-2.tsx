import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PMOS_2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.transistors.pmos;pointerEvents=1;',
  },
  _width: 60,
  _height: 100,
}

export function Pmos2(props: NodeProps) {
  return <Shape {...PMOS_2} {...props} _style={extendStyle(PMOS_2, props)} />
}
