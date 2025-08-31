import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NIGBT = {
  _style:
    'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.transistors.nigbt;',
  _width: 64,
  _height: 100,
}

export function Nigbt(props: DiagramNodeProps) {
  return <Shape {...NIGBT} {...props} _style={extendStyle(NIGBT, props)} />
}
