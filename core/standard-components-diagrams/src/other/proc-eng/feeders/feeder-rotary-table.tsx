import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FEEDER_ROTARY_TABLE = {
  _style:
    'shape=mxgraph.pid.feeders.feeder_(rotary_table);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 104,
  _height: 100,
}

export function FeederRotaryTable(props: DiagramNodeProps) {
  return (
    <Shape
      {...FEEDER_ROTARY_TABLE}
      {...props}
      _style={extendStyle(FEEDER_ROTARY_TABLE, props)}
    />
  )
}
