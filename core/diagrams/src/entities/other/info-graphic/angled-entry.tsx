import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ANGLED_ENTRY = {
  _style: {
    entity:
      'shape=mxgraph.infographic.parallelogram;dx=5;html=1;fillColor=#10739E;strokeColor=none;shadow=0;fontSize=17;fontColor=#FFFFFF;align=center;fontStyle=1;whiteSpace=wrap;',
  },
  _width: 0,
  _height: 30,
}

export function AngledEntry(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ANGLED_ENTRY)} />
}
