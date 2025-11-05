import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CALCULATOR = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;align=center;labelBackgroundColor=#ffffff;verticalAlign=top;strokeWidth=2;strokeColor=#0080F0;shadow=0;dashed=0;shape=mxgraph.ios7.icons.calculator;',
  },
  _width: 24,
  _height: 30,
}

export function Calculator(props: NodeProps) {
  return (
    <Shape {...CALCULATOR} {...props} _style={extendStyle(CALCULATOR, props)} />
  )
}
