import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ECCENTRIC_WORM = {
  _style:
    'shape=mxgraph.pid.pumps_-_din.eccentric_worm;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 60,
  _height: 60,
}

export function EccentricWorm(props: DiagramNodeProps) {
  return (
    <Shape
      {...ECCENTRIC_WORM}
      {...props}
      _style={extendStyle(ECCENTRIC_WORM, props)}
    />
  )
}
