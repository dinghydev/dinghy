import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DISCRETE_INSTRUMENT_CONTROL_ROOM = {
  _style:
    'html=1;outlineConnect=0;align=center;dashed=0;aspect=fixed;shape=mxgraph.pid2inst.discInst;mounting=room',
  _width: 50,
  _height: 50,
}

export function DiscreteInstrumentControlRoom(props: DiagramNodeProps) {
  return <Shape {...DISCRETE_INSTRUMENT_CONTROL_ROOM} {...props} />
}
