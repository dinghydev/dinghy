import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FAILOVER_PROTECTIVE_SNAPSHOT_LOCKED = {
  _style:
    'shadow=0;dashed=0;html=1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.3d.failover_protective_snapshot_locked;',
  _width: 56,
  _height: 46,
}

export function FailoverProtectiveSnapshotLocked(props: DiagramNodeProps) {
  return <Shape {...FAILOVER_PROTECTIVE_SNAPSHOT_LOCKED} {...props} />
}
