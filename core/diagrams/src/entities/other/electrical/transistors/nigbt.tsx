import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const NIGBT = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.transistors.nigbt;',
  },
  _width: 64,
  _height: 100,
}

export function Nigbt(props: NodeProps) {
  return <Shape {...NIGBT} {...props} _style={extendStyle(NIGBT, props)} />
}
