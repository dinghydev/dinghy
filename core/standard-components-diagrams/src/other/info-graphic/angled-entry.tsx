import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ANGLED_ENTRY = {
  _style: {
    entity:
      'shape=mxgraph.infographic.parallelogram;dx=5;html=1;fillColor=#10739E;strokeColor=none;shadow=0;fontSize=17;fontColor=#FFFFFF;align=center;fontStyle=1;whiteSpace=wrap;',
  },
  _original_width: 0,
  _original_height: 30,
}

export function AngledEntry(props: DiagramNodeProps) {
  return (
    <Shape
      {...ANGLED_ENTRY}
      {...props}
      _style={extendStyle(ANGLED_ENTRY, props)}
    />
  )
}
