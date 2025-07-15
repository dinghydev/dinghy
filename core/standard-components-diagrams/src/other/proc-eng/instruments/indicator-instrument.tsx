import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const INDICATOR_INSTRUMENT = {
  _style:
    'html=1;outlineConnect=0;align=center;dashed=0;shape=mxgraph.pid2inst.indicator;mounting=room;overflow=fill;indType=inst',
  _width: 50,
  _height: 100,
}

export function IndicatorInstrument(props: DiagramNodeProps) {
  return <Shape {...INDICATOR_INSTRUMENT} {...props} />
}
