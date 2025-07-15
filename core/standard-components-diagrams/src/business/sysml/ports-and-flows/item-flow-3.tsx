import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ITEM_FLOW_3 = {
  _style:
    'edgeStyle=none;html=1;align=right;endArrow=none;exitX=0.5;exitY=1;entryX=0.5;entryY=0;',
  _width: 2,
  _height: 180,
}

export function ItemFlow3(props: DiagramNodeProps) {
  return <Shape {...ITEM_FLOW_3} {...props} />
}
