import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const OVERTIME = {
  _style: {
    entity:
      'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.time_clock',
  },
  _original_width: 86,
  _original_height: 100,
}

export function Overtime(props: DiagramNodeProps) {
  return (
    <Shape {...OVERTIME} {...props} _style={extendStyle(OVERTIME, props)} />
  )
}
