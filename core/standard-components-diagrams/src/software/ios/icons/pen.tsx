import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PEN = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;align=center;labelBackgroundColor=#ffffff;verticalAlign=top;strokeWidth=2;strokeColor=#0080F0;shadow=0;dashed=0;shape=mxgraph.ios7.icons.pen;',
  },
  _original_width: 29.4,
  _original_height: 29.7,
}

export function Pen(props: DiagramNodeProps) {
  return <Shape {...PEN} {...props} _style={extendStyle(PEN, props)} />
}
