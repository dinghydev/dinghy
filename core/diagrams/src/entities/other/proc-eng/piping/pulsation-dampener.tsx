import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PULSATION_DAMPENER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.piping.pulsation_dampener;',
  },
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
