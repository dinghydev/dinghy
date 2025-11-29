import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const IRON_CORE = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.inductors.iron_core;',
  },
  _width: 64,
  _height: 4,
}

export function IronCore(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, IRON_CORE)} />
}
