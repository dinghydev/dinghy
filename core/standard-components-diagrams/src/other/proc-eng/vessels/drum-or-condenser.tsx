import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DRUM_OR_CONDENSER = {
  _style: {
    entity:
      'shape=mxgraph.pid.vessels.drum_or_condenser;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _width: 91,
  _height: 30,
}

export function DrumOrCondenser(props: DiagramNodeProps) {
  return (
    <Shape
      {...DRUM_OR_CONDENSER}
      {...props}
      _style={extendStyle(DRUM_OR_CONDENSER, props)}
    />
  )
}
