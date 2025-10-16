import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const VISTA_TERMINAL = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/vista_terminal.svg;strokeColor=none;',
  },
  _width: 32.5,
  _height: 50,
}

export function VistaTerminal(props: DiagramNodeProps) {
  return (
    <Shape
      {...VISTA_TERMINAL}
      {...props}
      _style={extendStyle(VISTA_TERMINAL, props)}
    />
  )
}
