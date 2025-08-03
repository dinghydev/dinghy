import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const VISTA_CLIENT = {
  _style:
    'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/vista_client.svg;strokeColor=none;',
  _width: 38,
  _height: 50,
}

export function VistaClient(props: DiagramNodeProps) {
  return <Shape {...VISTA_CLIENT} {...props} />
}
