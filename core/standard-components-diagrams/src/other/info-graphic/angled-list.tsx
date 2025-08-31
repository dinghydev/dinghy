import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ANGLED_LIST = {
  _style:
    'shape=mxgraph.infographic.parallelogram;dx=5;html=1;whiteSpace=wrap;fillColor=#10739E;strokeColor=none;shadow=0;fontSize=17;fontColor=#FFFFFF;align=center;fontStyle=1;',
  _width: 0,
  _height: 170,
}

export function AngledList(props: DiagramNodeProps) {
  return (
    <Shape
      {...ANGLED_LIST}
      {...props}
      _style={extendStyle(ANGLED_LIST, props)}
    />
  )
}
