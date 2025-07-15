import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const WORKSTATION_CLIENT = {
  _style:
    'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/workstation_client.svg;',
  _width: 42.5,
  _height: 50,
}

export function WorkstationClient(props: DiagramNodeProps) {
  return <Shape {...WORKSTATION_CLIENT} {...props} />
}
