import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const INDICATOR_CONTROL = {
  _style:
    'html=1;outlineConnect=0;align=center;dashed=0;shape=mxgraph.pid2inst.indicator;mounting=room;overflow=fill;indType=ctrl',
  _width: 50,
  _height: 100,
}

export function IndicatorControl(props: DiagramNodeProps) {
  return <Shape {...INDICATOR_CONTROL} {...props} />
}
