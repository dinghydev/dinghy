import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ARROW_LIST_8 = {
  _style:
    'shape=mxgraph.infographic.ribbonSimple;notch1=0;notch2=10;notch=0;html=1;whiteSpace=wrap;fillColor=#5D7F99;strokeColor=none;shadow=0;fontSize=17;fontColor=#FFFFFF;align=left;spacingLeft=10;fontStyle=1;',
  _width: 7,
  _height: 220,
}

export function ArrowList8(props: DiagramNodeProps) {
  return (
    <Shape
      {...ARROW_LIST_8}
      {...props}
      _style={extendStyle(ARROW_LIST_8, props)}
    />
  )
}
