import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DISCRETE_INSTRUMENT_LOCAL_PANEL = {
  _style:
    'html=1;outlineConnect=0;align=center;dashed=0;aspect=fixed;shape=mxgraph.pid2inst.discInst;mounting=local',
  _width: 50,
  _height: 50,
}

export function DiscreteInstrumentLocalPanel(props: DiagramNodeProps) {
  return <Shape {...DISCRETE_INSTRUMENT_LOCAL_PANEL} {...props} />
}
