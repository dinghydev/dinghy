import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ASSISTED_FAILOVER_AND_FAILBACK = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#EF8F21;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.2d.assisted_failover_and_failback;',
  },
  _original_width: 44.8,
  _original_height: 44.8,
}

export function AssistedFailoverAndFailback(props: DiagramNodeProps) {
  return (
    <Shape
      {...ASSISTED_FAILOVER_AND_FAILBACK}
      {...props}
      _style={extendStyle(ASSISTED_FAILOVER_AND_FAILBACK, props)}
    />
  )
}
