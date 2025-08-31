import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DYNAMICS_365 = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/dynamics365/Dynamics365.svg;strokeColor=none;',
  _width: 50.12,
  _height: 68,
}

export function Dynamics365(props: DiagramNodeProps) {
  return (
    <Shape
      {...DYNAMICS_365}
      {...props}
      _style={extendStyle(DYNAMICS_365, props)}
    />
  )
}
