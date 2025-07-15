import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ANGLED_LIST_4 = {
  _style:
    'shape=mxgraph.infographic.parallelogram;dx=5;html=1;whiteSpace=wrap;fillColor=#F8C382;strokeColor=none;shadow=0;fontSize=17;fontColor=#FFFFFF;align=left;spacingLeft=10;fontStyle=1;',
  _width: 3,
  _height: 170,
}

export function AngledList4(props: DiagramNodeProps) {
  return <Shape {...ANGLED_LIST_4} {...props} />
}
