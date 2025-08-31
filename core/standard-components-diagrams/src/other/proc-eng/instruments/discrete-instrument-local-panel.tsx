import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DISCRETE_INSTRUMENT_LOCAL_PANEL = {
  _style: {
    entity:
      'html=1;outlineConnect=0;align=center;dashed=0;aspect=fixed;shape=mxgraph.pid2inst.discInst;mounting=local',
  },
  _width: 60,
  _height: 60,
}

export function DiscreteInstrumentLocalPanel(props: DiagramNodeProps) {
  return (
    <Shape
      {...DISCRETE_INSTRUMENT_LOCAL_PANEL}
      {...props}
      _style={extendStyle(DISCRETE_INSTRUMENT_LOCAL_PANEL, props)}
    />
  )
}
