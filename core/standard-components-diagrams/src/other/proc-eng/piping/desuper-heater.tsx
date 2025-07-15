import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DESUPER_HEATER = {
  _style:
    'html=1;dashed=0;outlineConnect=0;align=center;shape=mxgraph.pid.piping.desuper_heater;',
  _width: 50,
  _height: 50,
}

export function DesuperHeater(props: DiagramNodeProps) {
  return <Shape {...DESUPER_HEATER} {...props} />
}
