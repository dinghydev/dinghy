import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CALCULATOR = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.calculator;',
  },
  _width: 32,
  _height: 46,
}

export function Calculator(props: NodeProps) {
  return (
    <Shape {...CALCULATOR} {...props} _style={extendStyle(CALCULATOR, props)} />
  )
}
