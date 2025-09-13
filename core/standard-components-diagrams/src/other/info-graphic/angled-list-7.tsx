import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ANGLED_LIST_7 = {
  _style: {
    entity:
      'shape=mxgraph.infographic.parallelogram;dx=5;html=1;whiteSpace=wrap;fillColor=#23445D;strokeColor=none;shadow=0;fontSize=17;fontColor=#FFFFFF;align=center;fontStyle=1;',
  },
  _width: 6,
  _height: 170,
}

export function AngledList7(props: DiagramNodeProps) {
  return (
    <Shape
      {...ANGLED_LIST_7}
      {...props}
      _style={extendStyle(ANGLED_LIST_7, props)}
    />
  )
}
