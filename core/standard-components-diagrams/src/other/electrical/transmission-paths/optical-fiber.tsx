import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const OPTICAL_FIBER = {
  _style:
    'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.transmission.optical_fiber2;',
  _width: 130,
  _height: 80,
}

export function OpticalFiber(props: DiagramNodeProps) {
  return (
    <Shape
      {...OPTICAL_FIBER}
      {...props}
      _style={extendStyle(OPTICAL_FIBER, props)}
    />
  )
}
