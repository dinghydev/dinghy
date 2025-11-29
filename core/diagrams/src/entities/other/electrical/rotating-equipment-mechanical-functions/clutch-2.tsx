import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CLUTCH_2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.rot_mech.clutch_2;pointerEvents=1;',
  },
  _width: 90,
  _height: 60,
}

export function Clutch2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CLUTCH_2)} />
}
