import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DISCRETE_INSTRUMENT_CONTROL_ROOM = {
  _style: {
    entity:
      'html=1;outlineConnect=0;align=center;dashed=0;aspect=fixed;shape=mxgraph.pid2inst.discInst;mounting=room',
  },
  _width: 60,
  _height: 60,
}

export function DiscreteInstrumentControlRoom(props: DiagramNodeProps) {
  return (
    <Shape
      {...DISCRETE_INSTRUMENT_CONTROL_ROOM}
      {...props}
      _style={extendStyle(DISCRETE_INSTRUMENT_CONTROL_ROOM, props)}
    />
  )
}
