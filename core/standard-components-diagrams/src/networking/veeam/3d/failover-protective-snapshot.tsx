import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FAILOVER_PROTECTIVE_SNAPSHOT = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.3d.failover_protective_snapshot;',
  },
  _original_width: 46,
  _original_height: 46,
}

export function FailoverProtectiveSnapshot(props: DiagramNodeProps) {
  return (
    <Shape
      {...FAILOVER_PROTECTIVE_SNAPSHOT}
      {...props}
      _style={extendStyle(FAILOVER_PROTECTIVE_SNAPSHOT, props)}
    />
  )
}
