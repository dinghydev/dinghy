import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DETOUR = {
  _style:
    'html=1;strokeWidth=2;outlineConnect=0;dashed=0;align=center;fontSize=8;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.eip.detour;fillColor=#c0f5a9',
  _width: 150,
  _height: 90,
}

export function Detour(props: DiagramNodeProps) {
  return <Shape {...DETOUR} {...props} />
}
