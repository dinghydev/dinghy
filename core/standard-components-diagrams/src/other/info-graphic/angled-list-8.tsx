import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ANGLED_LIST_8 = {
  _style: {
    entity:
      'shape=mxgraph.infographic.parallelogram;dx=5;html=1;whiteSpace=wrap;fillColor=#5D7F99;strokeColor=none;shadow=0;fontSize=17;fontColor=#FFFFFF;align=left;spacingLeft=10;fontStyle=1;',
  },
  _original_width: 7,
  _original_height: 170,
}

export function AngledList8(props: DiagramNodeProps) {
  return (
    <Shape
      {...ANGLED_LIST_8}
      {...props}
      _style={extendStyle(ANGLED_LIST_8, props)}
    />
  )
}
