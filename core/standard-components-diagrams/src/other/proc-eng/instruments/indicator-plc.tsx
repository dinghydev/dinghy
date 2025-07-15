import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const INDICATOR_PLC = {
  _style:
    'html=1;outlineConnect=0;align=center;dashed=0;shape=mxgraph.pid2inst.indicator;mounting=room;overflow=fill;indType=plc',
  _width: 50,
  _height: 100,
}

export function IndicatorPlc(props: DiagramNodeProps) {
  return <Shape {...INDICATOR_PLC} {...props} />
}
