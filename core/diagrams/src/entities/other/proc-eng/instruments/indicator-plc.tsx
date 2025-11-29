import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const INDICATOR_PLC = {
  _style: {
    entity:
      'html=1;outlineConnect=0;align=center;dashed=0;shape=mxgraph.pid2inst.indicator;mounting=room;overflow=fill;indType=plc',
  },
  _width: 50,
  _height: 100,
}

export function IndicatorPlc(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, INDICATOR_PLC)} />
}
