import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const A7_POWER = {
  _style:
    'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.a7_power',
  _width: 60,
  _height: 60,
}

export function A7Power(props: DiagramNodeProps) {
  return (
    <Shape {...A7_POWER} {...props} _style={extendStyle(A7_POWER, props)} />
  )
}
