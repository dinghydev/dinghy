import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const INDICATOR_INSTRUMENT = {
  _style: {
    entity:
      'html=1;outlineConnect=0;align=center;dashed=0;shape=mxgraph.pid2inst.indicator;mounting=room;overflow=fill;indType=inst',
  },
  _width: 50,
  _height: 100,
}

export function IndicatorInstrument(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, INDICATOR_INSTRUMENT)} />
}
