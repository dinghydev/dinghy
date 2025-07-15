import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SELF_SERVICE_RECOVERY = {
  _style:
    'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#EF8F21;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.2d.self_service_recovery;',
  _width: 44.8,
  _height: 44.8,
}

export function SelfServiceRecovery(props: DiagramNodeProps) {
  return <Shape {...SELF_SERVICE_RECOVERY} {...props} />
}
