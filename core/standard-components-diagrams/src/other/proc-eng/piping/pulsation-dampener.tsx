import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PULSATION_DAMPENER = {
  _style:
    'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.piping.pulsation_dampener;',
  _width: 50,
  _height: 150,
}

export function PulsationDampener(props: DiagramNodeProps) {
  return (
    <Shape
      {...PULSATION_DAMPENER}
      {...props}
      _style={extendStyle(PULSATION_DAMPENER, props)}
    />
  )
}
