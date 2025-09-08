import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SPRAY_NOZZLE = {
  _style: {
    entity:
      'shape=mxgraph.pid.feeders.spray_nozzle;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _original_width: 100,
  _original_height: 50,
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
