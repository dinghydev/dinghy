import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const FAILOVER_PROTECTIVE_SNAPSHOT_RUNNING = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.3d.failover_protective_snapshot_running;',
  },
  _original_width: 58,
  _original_height: 46,
}

export function FailoverProtectiveSnapshotRunning(props: DiagramNodeProps) {
  return (
    <Shape
      {...FAILOVER_PROTECTIVE_SNAPSHOT_RUNNING}
      {...props}
      _style={extendStyle(FAILOVER_PROTECTIVE_SNAPSHOT_RUNNING, props)}
    />
  )
}
