import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CENTRIFUGAL = {
  _style: {
    entity:
      'shape=mxgraph.pid.pumps_-_din.centrifugal;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _original_width: 100,
  _original_height: 100,
}

export function Centrifugal(props: DiagramNodeProps) {
  return (
    <Shape
      {...CENTRIFUGAL}
      {...props}
      _style={extendStyle(CENTRIFUGAL, props)}
    />
  )
}
