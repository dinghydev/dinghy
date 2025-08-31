import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SPRAY_NOZZLE = {
  _style:
    'shape=mxgraph.pid.feeders.spray_nozzle;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 100,
  _height: 50,
}

export function SprayNozzle(props: DiagramNodeProps) {
  return (
    <Shape
      {...SPRAY_NOZZLE}
      {...props}
      _style={extendStyle(SPRAY_NOZZLE, props)}
    />
  )
}
