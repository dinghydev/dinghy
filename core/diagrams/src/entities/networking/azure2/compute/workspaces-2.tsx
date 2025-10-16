import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const WORKSPACES_2 = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/compute/Workspaces.svg;strokeColor=none;',
  },
  _original_width: 65,
  _original_height: 56.00000000000001,
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
