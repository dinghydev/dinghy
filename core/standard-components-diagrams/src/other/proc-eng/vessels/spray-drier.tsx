import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SPRAY_DRIER = {
  _style: {
    entity:
      'shape=mxgraph.pid.vessels.spray_drier;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _original_width: 100,
  _original_height: 80,
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
