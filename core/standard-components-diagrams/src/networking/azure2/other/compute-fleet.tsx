import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COMPUTE_FLEET = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Compute_Fleet.svg;strokeColor=none;',
  _width: 68,
  _height: 68,
}

export function ComputeFleet(props: DiagramNodeProps) {
  return <Shape {...COMPUTE_FLEET} {...props} />
}
