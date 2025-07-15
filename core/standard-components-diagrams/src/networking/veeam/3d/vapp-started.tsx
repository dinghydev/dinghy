import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const VAPP_STARTED = {
  _style:
    'shadow=0;dashed=0;html=1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.3d.vapp_started;',
  _width: 92,
  _height: 62,
}

export function VappStarted(props: DiagramNodeProps) {
  return <Shape {...VAPP_STARTED} {...props} />
}
