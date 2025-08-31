import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PERMISSIONS = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.permissions_2;fillColor=#D2D3D3;gradientColor=none;',
  },
  _width: 46.5,
  _height: 63,
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
