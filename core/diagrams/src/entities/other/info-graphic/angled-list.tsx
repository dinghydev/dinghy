import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ANGLED_LIST = {
  _style: {
    entity:
      'shape=mxgraph.infographic.parallelogram;dx=5;html=1;whiteSpace=wrap;fillColor=#10739E;strokeColor=none;shadow=0;fontSize=17;fontColor=#FFFFFF;align=center;fontStyle=1;',
  },
  _width: 0,
  _height: 170,
}

export function AngledList(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ANGLED_LIST)} />
}
