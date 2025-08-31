import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CALCULATOR = {
  _style: {
    entity:
      'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.calculator',
  },
  _width: 100,
  _height: 74,
}

export function Calculator(props: DiagramNodeProps) {
  return (
    <Shape {...CALCULATOR} {...props} _style={extendStyle(CALCULATOR, props)} />
  )
}
