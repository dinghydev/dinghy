import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const STORE_RIGHT_UP_1 = {
  _style:
    'shape=mxgraph.signs.safety.store_right_up_1;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 70,
  _height: 99,
}

export function StoreRightUp1(props: DiagramNodeProps) {
  return <Shape {...STORE_RIGHT_UP_1} {...props} />
}
