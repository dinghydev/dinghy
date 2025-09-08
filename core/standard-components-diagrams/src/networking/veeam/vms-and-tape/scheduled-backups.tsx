import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SCHEDULED_BACKUPS = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#EF8F21;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.2d.scheduled_backups;',
  },
  _original_width: 44.8,
  _original_height: 44.8,
}

export function ScheduledBackups(props: DiagramNodeProps) {
  return (
    <Shape
      {...SCHEDULED_BACKUPS}
      {...props}
      _style={extendStyle(SCHEDULED_BACKUPS, props)}
    />
  )
}
