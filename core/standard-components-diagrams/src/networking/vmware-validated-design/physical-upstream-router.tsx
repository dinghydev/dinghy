import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PHYSICAL_UPSTREAM_ROUTER = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#434445;aspect=fixed;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.vvd.physical_upstream_router;',
  _width: 50,
  _height: 50,
}

export function PhysicalUpstreamRouter(props: DiagramNodeProps) {
  return <Shape {...PHYSICAL_UPSTREAM_ROUTER} {...props} />
}
