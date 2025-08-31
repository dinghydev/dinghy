import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const EDIT_BAR = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;shadow=0;dashed=0;strokeWidth=2;shape=mxgraph.ios7.misc.edit_bar;strokeColor=#0080F0;fillColor=#e0e0e0',
  },
  _width: 175,
  _height: 28.000000000000004,
}

export function EditBar(props: DiagramNodeProps) {
  return (
    <Shape {...EDIT_BAR} {...props} _style={extendStyle(EDIT_BAR, props)} />
  )
}
