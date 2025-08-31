import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MULTIMEDIA = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.multimedia;fillColor=#D2D3D3;gradientColor=none;',
  },
  _width: 66,
  _height: 63,
}

export function Multimedia(props: DiagramNodeProps) {
  return (
    <Shape {...MULTIMEDIA} {...props} _style={extendStyle(MULTIMEDIA, props)} />
  )
}
