import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DPST_ON = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.dpst2;elSwitchState=on;',
  },
  _width: 75,
  _height: 39,
}

export function DpstOn(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DPST_ON)} />
}
