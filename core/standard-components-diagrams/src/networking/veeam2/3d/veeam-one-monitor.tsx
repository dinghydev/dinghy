import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const VEEAM_ONE_MONITOR = {
  _style:
    'sketch=0;shadow=0;dashed=0;html=1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.3d.veeam_one_monitor;',
  _width: 46,
  _height: 46,
}

export function VeeamOneMonitor(props: DiagramNodeProps) {
  return <Shape {...VEEAM_ONE_MONITOR} {...props} />
}
