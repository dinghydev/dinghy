import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SERVER_FARM = {
  _style:
    'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/server_farm.svg;',
  _width: 50,
  _height: 50,
}

export function ServerFarm(props: DiagramNodeProps) {
  return <Shape {...SERVER_FARM} {...props} />
}
