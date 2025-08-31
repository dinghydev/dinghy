import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SCHEDULED_BACKUPS = {
  _style:
    'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#EF8F21;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.2d.scheduled_backups;',
  _width: 44.8,
  _height: 44.8,
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
