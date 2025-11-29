import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VARIOMETER = {
  _style: {
    entity:
      'verticalLabelPosition=top;shadow=0;dashed=0;align=center;fillColor=strokeColor;html=1;verticalAlign=bottom;strokeWidth=1;shape=mxgraph.electrical.inductors.variometer;',
  },
  _width: 150,
  _height: 88,
}

export function Variometer(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, VARIOMETER)} />
}
