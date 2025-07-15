import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const INTENSIVE_CARE = {
  _style:
    'shape=mxgraph.signs.healthcare.intensive_care;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 98,
  _height: 98,
}

export function IntensiveCare(props: DiagramNodeProps) {
  return <Shape {...INTENSIVE_CARE} {...props} />
}
