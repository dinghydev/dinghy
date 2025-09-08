import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const COMPETING_CONSUMERS = {
  _style: {
    entity:
      'fillColor=#c0f5a9;dashed=0;outlineConnect=0;strokeWidth=2;html=1;align=center;fontSize=8;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.eip.competing_consumers;',
  },
  _original_width: 150,
  _original_height: 90,
}

export function CompetingConsumers(props: DiagramNodeProps) {
  return (
    <Shape
      {...COMPETING_CONSUMERS}
      {...props}
      _style={extendStyle(COMPETING_CONSUMERS, props)}
    />
  )
}
