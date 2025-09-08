import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SPRAY_DRIER = {
  _style: {
    entity:
      'shape=mxgraph.pid.driers.spray_drier;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _original_width: 100,
  _original_height: 140,
}

export function SprayDrier(props: DiagramNodeProps) {
  return (
    <Shape
      {...SPRAY_DRIER}
      {...props}
      _style={extendStyle(SPRAY_DRIER, props)}
    />
  )
}
