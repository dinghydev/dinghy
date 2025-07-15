import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const WORKSPACES_2 = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/compute/Workspaces.svg;',
  _width: 65,
  _height: 56.00000000000001,
}

export function Workspaces2(props: DiagramNodeProps) {
  return <Shape {...WORKSPACES_2} {...props} />
}
