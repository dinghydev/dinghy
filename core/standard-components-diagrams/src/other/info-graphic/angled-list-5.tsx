import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ANGLED_LIST_5 = {
  _style: {
    entity:
      'shape=mxgraph.infographic.parallelogram;dx=5;html=1;whiteSpace=wrap;fillColor=#AE4132;strokeColor=none;shadow=0;fontSize=17;fontColor=#FFFFFF;align=center;fontStyle=1;',
  },
  _width: 4,
  _height: 170,
}

export function AngledList5(props: DiagramNodeProps) {
  return (
    <Shape
      {...ANGLED_LIST_5}
      {...props}
      _style={extendStyle(ANGLED_LIST_5, props)}
    />
  )
}
