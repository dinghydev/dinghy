import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MECHANICAL_INTERLOCK = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.rot_mech.mechanical_interlock;pointerEvents=1;',
  },
  _width: 100,
  _height: 30,
}

export function MechanicalInterlock(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, MECHANICAL_INTERLOCK)} />
}
