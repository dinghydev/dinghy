import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ISCI_ROUTER = {
  _style:
    'shape=mxgraph.cisco.routers.isci_router;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 101,
  _height: 75,
}

export function IsciRouter(props: DiagramNodeProps) {
  return <Shape {...ISCI_ROUTER} {...props} />
}
