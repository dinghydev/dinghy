import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DISCRETE_INSTRUMENT_FIELD = {
  _style: {
    entity:
      'html=1;outlineConnect=0;align=center;dashed=0;aspect=fixed;shape=mxgraph.pid2inst.discInst;mounting=field',
  },
  _original_width: 50,
  _original_height: 50,
}

export function DiscreteInstrumentField(props: DiagramNodeProps) {
  return (
    <Shape
      {...DISCRETE_INSTRUMENT_FIELD}
      {...props}
      _style={extendStyle(DISCRETE_INSTRUMENT_FIELD, props)}
    />
  )
}
