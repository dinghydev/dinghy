import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CALCULATOR = {
  _style: {
    entity:
      'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.calculator',
  },
  _width: 100,
  _height: 74,
}

export function Calculator(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CALCULATOR)} />
}
