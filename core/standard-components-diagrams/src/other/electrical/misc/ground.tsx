import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const GROUND = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.signal_sources.signal_ground;',
  },
  _original_width: 45,
  _original_height: 30,
}

export function Ground(props: DiagramNodeProps) {
  return <Shape {...GROUND} {...props} _style={extendStyle(GROUND, props)} />
}
