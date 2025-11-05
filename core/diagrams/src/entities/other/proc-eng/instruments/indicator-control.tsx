import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const INDICATOR_CONTROL = {
  _style: {
    entity:
      'html=1;outlineConnect=0;align=center;dashed=0;shape=mxgraph.pid2inst.indicator;mounting=room;overflow=fill;indType=ctrl',
  },
  _width: 50,
  _height: 100,
}

export function IndicatorControl(props: NodeProps) {
  return (
    <Shape
      {...INDICATOR_CONTROL}
      {...props}
      _style={extendStyle(INDICATOR_CONTROL, props)}
    />
  )
}
