import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LOOP_ANTENNA_2 = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.miscellaneous.loop_antenna',
  _width: 60,
  _height: 60,
}

export function LoopAntenna2(props: DiagramNodeProps) {
  return (
    <Shape
      {...LOOP_ANTENNA_2}
      {...props}
      _style={extendStyle(LOOP_ANTENNA_2, props)}
    />
  )
}
