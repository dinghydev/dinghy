import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BARREL_DRUM = {
  _style: {
    entity:
      'shape=mxgraph.pid.vessels.barrel,_drum;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _width: 62,
  _height: 100,
}

export function BarrelDrum(props: DiagramNodeProps) {
  return (
    <Shape
      {...BARREL_DRUM}
      {...props}
      _style={extendStyle(BARREL_DRUM, props)}
    />
  )
}
