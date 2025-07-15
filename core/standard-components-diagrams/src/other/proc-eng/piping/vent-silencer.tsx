import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const VENT_SILENCER = {
  _style:
    'html=1;dashed=0;outlineConnect=0;align=center;shape=mxgraph.pid.piping.vent_silencer;',
  _width: 20,
  _height: 80,
}

export function VentSilencer(props: DiagramNodeProps) {
  return <Shape {...VENT_SILENCER} {...props} />
}
