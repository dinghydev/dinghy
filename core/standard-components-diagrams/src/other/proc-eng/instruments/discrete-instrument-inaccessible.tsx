import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DISCRETE_INSTRUMENT_INACCESSIBLE = {
  _style:
    'html=1;outlineConnect=0;align=center;dashed=0;aspect=fixed;shape=mxgraph.pid2inst.discInst;mounting=inaccessible',
  _width: 60,
  _height: 60,
}

export function DiscreteInstrumentInaccessible(props: DiagramNodeProps) {
  return (
    <Shape
      {...DISCRETE_INSTRUMENT_INACCESSIBLE}
      {...props}
      _style={extendStyle(DISCRETE_INSTRUMENT_INACCESSIBLE, props)}
    />
  )
}
