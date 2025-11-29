import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DETENT = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.rot_mech.detent;pointerEvents=1;',
  },
  _width: 100,
  _height: 8,
}

export function Detent(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DETENT)} />
}
