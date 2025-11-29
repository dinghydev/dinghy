import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CLUTCH = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.rot_mech.clutch;pointerEvents=1;',
  },
  _width: 100,
  _height: 20,
}

export function Clutch(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CLUTCH)} />
}
