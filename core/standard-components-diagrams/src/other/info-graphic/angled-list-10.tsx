import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ANGLED_LIST_10 = {
  _style: {
    entity:
      'shape=mxgraph.infographic.parallelogram;dx=5;html=1;whiteSpace=wrap;fillColor=#61C6CE;strokeColor=none;shadow=0;fontSize=17;fontColor=#FFFFFF;align=left;spacingLeft=10;fontStyle=1;',
  },
  _width: 9,
  _height: 170,
}

export function AngledList10(props: DiagramNodeProps) {
  return (
    <Shape
      {...ANGLED_LIST_10}
      {...props}
      _style={extendStyle(ANGLED_LIST_10, props)}
    />
  )
}
