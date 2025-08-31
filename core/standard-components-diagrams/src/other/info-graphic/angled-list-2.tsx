import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ANGLED_LIST_2 = {
  _style: {
    entity:
      'shape=mxgraph.infographic.parallelogram;dx=5;html=1;whiteSpace=wrap;fillColor=#64BBE2;strokeColor=none;shadow=0;fontSize=17;fontColor=#FFFFFF;align=left;spacingLeft=10;fontStyle=1;',
  },
  _width: 1,
  _height: 170,
}

export function AngledList2(props: DiagramNodeProps) {
  return (
    <Shape
      {...ANGLED_LIST_2}
      {...props}
      _style={extendStyle(ANGLED_LIST_2, props)}
    />
  )
}
