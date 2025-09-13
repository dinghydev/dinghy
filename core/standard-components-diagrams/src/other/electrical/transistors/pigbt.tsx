import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PIGBT = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.transistors.pigbt;',
  },
  _width: 64,
  _height: 100,
}

export function Pigbt(props: DiagramNodeProps) {
  return <Shape {...PIGBT} {...props} _style={extendStyle(PIGBT, props)} />
}
