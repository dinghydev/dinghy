import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COMPUTE_FLEET = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Compute_Fleet.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
}

export function ComputeFleet(props: DiagramNodeProps) {
  return (
    <Shape
      {...COMPUTE_FLEET}
      {...props}
      _style={extendStyle(COMPUTE_FLEET, props)}
    />
  )
}
