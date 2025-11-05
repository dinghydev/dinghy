import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PIGBT = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.transistors.pigbt;',
  },
  _width: 64,
  _height: 100,
}

export function Pigbt(props: NodeProps) {
  return <Shape {...PIGBT} {...props} _style={extendStyle(PIGBT, props)} />
}
