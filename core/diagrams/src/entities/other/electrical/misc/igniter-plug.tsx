import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const IGNITER_PLUG = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.miscellaneous.igniter_plug2',
  },
  _width: 72,
  _height: 39,
}

export function IgniterPlug(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, IGNITER_PLUG)} />
}
