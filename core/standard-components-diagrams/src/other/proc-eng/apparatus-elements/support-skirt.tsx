import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SUPPORT_SKIRT = {
  _style:
    'shape=mxgraph.pid.apparatus_elements.support_skirt;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 100,
  _height: 100,
}

export function SupportSkirt(props: DiagramNodeProps) {
  return <Shape {...SUPPORT_SKIRT} {...props} />
}
