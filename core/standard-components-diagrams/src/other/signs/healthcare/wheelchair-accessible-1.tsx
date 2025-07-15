import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const WHEELCHAIR_ACCESSIBLE_1 = {
  _style:
    'shape=mxgraph.signs.healthcare.wheelchair_accessible_1;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 87,
  _height: 99,
}

export function WheelchairAccessible1(props: DiagramNodeProps) {
  return <Shape {...WHEELCHAIR_ACCESSIBLE_1} {...props} />
}
