import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const AUTOMATIC_RETURN = {
  _style:
    'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.rot_mech.automatic_return;pointerEvents=1;',
  _width: 100,
  _height: 12,
}

export function AutomaticReturn(props: DiagramNodeProps) {
  return <Shape {...AUTOMATIC_RETURN} {...props} />
}
