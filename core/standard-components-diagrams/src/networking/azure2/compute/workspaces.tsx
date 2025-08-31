import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WORKSPACES = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/compute/Workspaces2.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
}

export function Workspaces(props: DiagramNodeProps) {
  return (
    <Shape {...WORKSPACES} {...props} _style={extendStyle(WORKSPACES, props)} />
  )
}
