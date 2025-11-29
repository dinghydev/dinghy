import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const WORKSTATION = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#005F4B;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.workstation;',
  },
  _width: 38,
  _height: 28.000000000000004,
}

export function Workstation(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, WORKSTATION)} />
}
