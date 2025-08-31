import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const GEAR = {
  _style:
    'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.gear',
  _width: 60,
  _height: 60,
}

export function Gear(props: DiagramNodeProps) {
  return <Shape {...GEAR} {...props} _style={extendStyle(GEAR, props)} />
}
