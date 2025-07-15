import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const NCE_ROUTER = {
  _style:
    'shape=mxgraph.cisco.routers.nce_router;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 78,
  _height: 53,
}

export function NceRouter(props: DiagramNodeProps) {
  return <Shape {...NCE_ROUTER} {...props} />
}
