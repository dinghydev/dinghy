import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const INDUCTOR = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.inductors.inductor;',
  },
  _original_width: 100,
  _original_height: 42,
}

export function Inductor(props: DiagramNodeProps) {
  return (
    <Shape {...INDUCTOR} {...props} _style={extendStyle(INDUCTOR, props)} />
  )
}
