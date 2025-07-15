import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PDA = {
  _style:
    'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/pda.svg;',
  _width: 27,
  _height: 50,
}

export function Pda(props: DiagramNodeProps) {
  return <Shape {...PDA} {...props} />
}
