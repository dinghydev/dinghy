import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CENTRIFUGAL = {
  _style:
    'shape=mxgraph.pid.pumps_-_din.centrifugal;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 60,
  _height: 60,
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
