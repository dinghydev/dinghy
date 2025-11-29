import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const AUTOMATIC_RETURN = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.rot_mech.automatic_return;pointerEvents=1;',
  },
  _width: 100,
  _height: 12,
}

export function AutomaticReturn(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, AUTOMATIC_RETURN)} />
}
