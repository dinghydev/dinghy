import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FAX = {
  _style:
    'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/fax.svg;',
  _width: 50,
  _height: 37.5,
}

export function Fax(props: DiagramNodeProps) {
  return <Shape {...FAX} {...props} />
}
