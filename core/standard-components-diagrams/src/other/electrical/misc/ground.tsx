import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const GROUND = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.signal_sources.signal_ground;',
  _width: 45,
  _height: 30,
}

export function Ground(props: DiagramNodeProps) {
  return <Shape {...GROUND} {...props} _style={extendStyle(GROUND, props)} />
}
