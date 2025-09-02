import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VAPP_STARTED = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.3d.vapp_started;',
  },
  _original_width: 92,
  _original_height: 62,
}

export function VappStarted(props: DiagramNodeProps) {
  return (
    <Shape
      {...VAPP_STARTED}
      {...props}
      _style={extendStyle(VAPP_STARTED, props)}
    />
  )
}
