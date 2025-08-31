import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MAGNETIC_CORE = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.inductors.magnetic_core;direction=north;',
  },
  _width: 64,
  _height: 3,
}

export function MagneticCore(props: DiagramNodeProps) {
  return (
    <Shape
      {...MAGNETIC_CORE}
      {...props}
      _style={extendStyle(MAGNETIC_CORE, props)}
    />
  )
}
