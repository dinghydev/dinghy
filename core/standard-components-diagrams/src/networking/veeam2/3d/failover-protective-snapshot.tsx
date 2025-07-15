import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FAILOVER_PROTECTIVE_SNAPSHOT = {
  _style:
    'sketch=0;shadow=0;dashed=0;html=1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.3d.failover_protective_snapshot;',
  _width: 46,
  _height: 46,
}

export function FailoverProtectiveSnapshot(props: DiagramNodeProps) {
  return <Shape {...FAILOVER_PROTECTIVE_SNAPSHOT} {...props} />
}
