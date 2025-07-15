import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DYNAMICS_365 = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/dynamics365/Dynamics365.svg;',
  _width: 50.12,
  _height: 68,
}

export function Dynamics365(props: DiagramNodeProps) {
  return <Shape {...DYNAMICS_365} {...props} />
}
