import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SYNCHRO = {
  _style:
    'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.rot_mech.synchro;',
  _width: 80,
  _height: 100,
}

export function Synchro(props: DiagramNodeProps) {
  return <Shape {...SYNCHRO} {...props} />
}
