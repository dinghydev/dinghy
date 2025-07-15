import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ANGLED_LIST_8 = {
  _style:
    'shape=mxgraph.infographic.parallelogram;dx=5;html=1;whiteSpace=wrap;fillColor=#5D7F99;strokeColor=none;shadow=0;fontSize=17;fontColor=#FFFFFF;align=left;spacingLeft=10;fontStyle=1;',
  _width: 7,
  _height: 170,
}

export function AngledList8(props: DiagramNodeProps) {
  return <Shape {...ANGLED_LIST_8} {...props} />
}
