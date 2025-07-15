import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const GENERIC_SERVER = {
  _style:
    'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/generic_server.svg;',
  _width: 28.000000000000004,
  _height: 50,
}

export function GenericServer(props: DiagramNodeProps) {
  return <Shape {...GENERIC_SERVER} {...props} />
}
