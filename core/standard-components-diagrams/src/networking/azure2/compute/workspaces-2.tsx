import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WORKSPACES_2 = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/compute/Workspaces.svg;strokeColor=none;',
  },
  _width: 65,
  _height: 56.00000000000001,
}

export function Workspaces2(props: DiagramNodeProps) {
  return (
    <Shape
      {...WORKSPACES_2}
      {...props}
      _style={extendStyle(WORKSPACES_2, props)}
    />
  )
}
