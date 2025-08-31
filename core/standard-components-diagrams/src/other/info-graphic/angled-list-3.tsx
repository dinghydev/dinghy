import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ANGLED_LIST_3 = {
  _style: {
    entity:
      'shape=mxgraph.infographic.parallelogram;dx=5;html=1;whiteSpace=wrap;fillColor=#F2931E;strokeColor=none;shadow=0;fontSize=17;fontColor=#FFFFFF;align=center;fontStyle=1;',
  },
  _width: 2,
  _height: 170,
}

export function AngledList3(props: DiagramNodeProps) {
  return (
    <Shape
      {...ANGLED_LIST_3}
      {...props}
      _style={extendStyle(ANGLED_LIST_3, props)}
    />
  )
}
