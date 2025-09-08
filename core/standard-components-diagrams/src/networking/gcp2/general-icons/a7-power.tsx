import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const A7_POWER = {
  _style: {
    entity:
      'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.a7_power',
  },
  _original_width: 100,
  _original_height: 100,
}

export function A7Power(props: DiagramNodeProps) {
  return (
    <Shape {...A7_POWER} {...props} _style={extendStyle(A7_POWER, props)} />
  )
}
