import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const INDUCTOR = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.inductors.inductor;',
  },
  _width: 100,
  _height: 42,
}

export function Inductor(props: NodeProps) {
  return (
    <Shape {...INDUCTOR} {...props} _style={extendStyle(INDUCTOR, props)} />
  )
}
