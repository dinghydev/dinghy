import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FEEDER_ROTARY_TABLE = {
  _style: {
    entity:
      'shape=mxgraph.pid.feeders.feeder_(rotary_table);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _width: 104,
  _height: 100,
}

export function FeederRotaryTable(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, FEEDER_ROTARY_TABLE)} />
}
