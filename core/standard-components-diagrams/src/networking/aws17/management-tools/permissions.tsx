import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PERMISSIONS = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.permissions;fillColor=#759C3E;gradientColor=none;',
  _width: 67.5,
  _height: 79.5,
}

export function Permissions(props: DiagramNodeProps) {
  return (
    <Shape
      {...PERMISSIONS}
      {...props}
      _style={extendStyle(PERMISSIONS, props)}
    />
  )
}
