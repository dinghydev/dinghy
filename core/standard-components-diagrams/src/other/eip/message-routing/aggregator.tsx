import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AGGREGATOR = {
  _style: {
    entity:
      'html=1;strokeWidth=2;outlineConnect=0;dashed=0;align=center;fontSize=8;fillColor=#c0f5a9;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.eip.aggregator;',
  },
  _original_width: 150,
  _original_height: 90,
}

export function Aggregator(props: DiagramNodeProps) {
  return (
    <Shape {...AGGREGATOR} {...props} _style={extendStyle(AGGREGATOR, props)} />
  )
}
