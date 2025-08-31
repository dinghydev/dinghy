import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NUMBER_PAD = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;shadow=0;dashed=0;strokeWidth=2;shape=mxgraph.ios7.misc.number_pad;strokeWidth=1;',
  },
  _width: 140,
  _height: 160,
}

export function NumberPad(props: DiagramNodeProps) {
  return (
    <Shape {...NUMBER_PAD} {...props} _style={extendStyle(NUMBER_PAD, props)} />
  )
}
