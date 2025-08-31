import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CONTENT_BASED_ROUTER = {
  _style:
    'html=1;strokeWidth=2;outlineConnect=0;dashed=0;align=center;fontSize=8;fillColor=#c0f5a9;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.eip.content_based_router;',
  _width: 150,
  _height: 90,
}

export function ContentBasedRouter(props: DiagramNodeProps) {
  return (
    <Shape
      {...CONTENT_BASED_ROUTER}
      {...props}
      _style={extendStyle(CONTENT_BASED_ROUTER, props)}
    />
  )
}
