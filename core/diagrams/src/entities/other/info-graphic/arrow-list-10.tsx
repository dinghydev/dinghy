import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ARROW_LIST_10 = {
  _style: {
    entity:
      'shape=mxgraph.infographic.ribbonSimple;notch1=0;notch2=10;notch=0;html=1;whiteSpace=wrap;fillColor=#61C6CE;strokeColor=none;shadow=0;fontSize=17;fontColor=#FFFFFF;align=left;spacingLeft=10;fontStyle=1;',
  },
  _width: 9,
  _height: 220,
}

export function ArrowList10(props: NodeProps) {
  return (
    <Shape
      {...ARROW_LIST_10}
      {...props}
      _style={extendStyle(ARROW_LIST_10, props)}
    />
  )
}
