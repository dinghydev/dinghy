import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ANGLED_LIST_6 = {
  _style: {
    entity:
      'shape=mxgraph.infographic.parallelogram;dx=5;html=1;whiteSpace=wrap;fillColor=#F08E81;strokeColor=none;shadow=0;fontSize=17;fontColor=#FFFFFF;align=left;spacingLeft=10;fontStyle=1;',
  },
  _width: 5,
  _height: 170,
}

export function AngledList6(props: DiagramNodeProps) {
  return (
    <Shape
      {...ANGLED_LIST_6}
      {...props}
      _style={extendStyle(ANGLED_LIST_6, props)}
    />
  )
}
