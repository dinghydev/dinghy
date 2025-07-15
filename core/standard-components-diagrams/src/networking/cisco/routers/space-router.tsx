import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SPACE_ROUTER = {
  _style:
    'shape=mxgraph.cisco.routers.space_router;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 134,
  _height: 70,
}

export function SpaceRouter(props: DiagramNodeProps) {
  return <Shape {...SPACE_ROUTER} {...props} />
}
