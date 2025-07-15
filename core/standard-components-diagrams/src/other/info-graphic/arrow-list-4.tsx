import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ARROW_LIST_4 = {
  _style:
    'shape=mxgraph.infographic.ribbonSimple;notch1=0;notch2=10;notch=0;html=1;whiteSpace=wrap;fillColor=#F8C382;strokeColor=none;shadow=0;fontSize=17;fontColor=#FFFFFF;align=left;spacingLeft=10;fontStyle=1;',
  _width: 3,
  _height: 220,
}

export function ArrowList4(props: DiagramNodeProps) {
  return <Shape {...ARROW_LIST_4} {...props} />
}
