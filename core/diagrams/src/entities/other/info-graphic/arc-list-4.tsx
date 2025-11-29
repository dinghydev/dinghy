import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ARC_LIST_4 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.partConcEllipse;fillColor=#12AAB5;strokeColor=#ffffff;startAngle=0.02;endAngle=0.25;arcWidth=0.29;strokeWidth=3;',
  },
  _width: 3,
  _height: 200,
}

export function ArcList4(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ARC_LIST_4)} />
}
