import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const VISTA_TERMINAL = {
  _style:
    'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/vista_terminal.svg;',
  _width: 32.5,
  _height: 50,
}

export function VistaTerminal(props: DiagramNodeProps) {
  return <Shape {...VISTA_TERMINAL} {...props} />
}
