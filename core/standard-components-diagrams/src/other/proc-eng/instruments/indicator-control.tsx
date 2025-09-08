import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const INDICATOR_CONTROL = {
  _style: {
    entity:
      'html=1;outlineConnect=0;align=center;dashed=0;shape=mxgraph.pid2inst.indicator;mounting=room;overflow=fill;indType=ctrl',
  },
  _original_width: 50,
  _original_height: 100,
}

export function IndicatorControl(props: DiagramNodeProps) {
  return (
    <Shape
      {...INDICATOR_CONTROL}
      {...props}
      _style={extendStyle(INDICATOR_CONTROL, props)}
    />
  )
}
