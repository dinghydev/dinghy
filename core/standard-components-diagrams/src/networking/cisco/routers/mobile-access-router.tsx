import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MOBILE_ACCESS_ROUTER = {
  _style: {
    entity:
      'shape=mxgraph.cisco.routers.mobile_access_router;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 99,
  _original_height: 58,
}

export function MobileAccessRouter(props: DiagramNodeProps) {
  return (
    <Shape
      {...MOBILE_ACCESS_ROUTER}
      {...props}
      _style={extendStyle(MOBILE_ACCESS_ROUTER, props)}
    />
  )
}
