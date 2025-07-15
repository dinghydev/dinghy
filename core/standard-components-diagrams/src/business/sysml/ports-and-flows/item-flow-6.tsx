import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ITEM_FLOW_6 = {
  _style:
    'edgeStyle=none;html=1;align=left;verticalAlign=top;endArrow=none;exitX=1;exitY=0.5;entryX=0;entryY=0.5;',
  _width: 2,
  _height: 370,
}

export function ItemFlow6(props: DiagramNodeProps) {
  return <Shape {...ITEM_FLOW_6} {...props} />
}
