import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ONE_MONITOR = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#EF8F21;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.2d.veeam_one_monitor;',
  },
  _original_width: 44.8,
  _original_height: 44.8,
}

export function OneMonitor(props: DiagramNodeProps) {
  return (
    <Shape
      {...ONE_MONITOR}
      {...props}
      _style={extendStyle(ONE_MONITOR, props)}
    />
  )
}
