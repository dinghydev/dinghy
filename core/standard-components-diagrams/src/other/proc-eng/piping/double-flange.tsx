import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DOUBLE_FLANGE = {
  _style:
    'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.piping.double_flange;pointerEvents=1;',
  _width: 5,
  _height: 20,
}

export function DoubleFlange(props: DiagramNodeProps) {
  return (
    <Shape
      {...DOUBLE_FLANGE}
      {...props}
      _style={extendStyle(DOUBLE_FLANGE, props)}
    />
  )
}
