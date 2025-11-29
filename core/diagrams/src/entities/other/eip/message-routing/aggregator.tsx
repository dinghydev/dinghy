import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const AGGREGATOR = {
  _style: {
    entity:
      'html=1;strokeWidth=2;outlineConnect=0;dashed=0;align=center;fontSize=8;fillColor=#c0f5a9;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.eip.aggregator;',
  },
  _width: 150,
  _height: 90,
}

export function Aggregator(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, AGGREGATOR)} />
}
