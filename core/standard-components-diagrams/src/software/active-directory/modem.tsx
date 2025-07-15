import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MODEM = {
  _style:
    'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/modem.svg;',
  _width: 50,
  _height: 41.5,
}

export function Modem(props: DiagramNodeProps) {
  return <Shape {...MODEM} {...props} />
}
