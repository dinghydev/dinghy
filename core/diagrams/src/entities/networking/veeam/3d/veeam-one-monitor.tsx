import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const VEEAM_ONE_MONITOR = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.3d.veeam_one_monitor;',
  },
  _original_width: 46,
  _original_height: 46,
}

export function VeeamOneMonitor(props: DiagramNodeProps) {
  return (
    <Shape
      {...VEEAM_ONE_MONITOR}
      {...props}
      _style={extendStyle(VEEAM_ONE_MONITOR, props)}
    />
  )
}
