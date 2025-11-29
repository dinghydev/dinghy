import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ITEM_2 = {
  _style: {
    entity:
      'label;fontStyle=0;strokeColor=none;fillColor=none;align=left;verticalAlign=top;overflow=hidden;spacingLeft=28;spacingRight=4;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;imageWidth=16;imageHeight=16;whiteSpace=wrap;html=1;image=img/clipart/Gear_128x128.png',
  },
  _width: 0,
  _height: 26,
}

export function Item2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ITEM_2)} />
}
