import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const LOOKING_GLASS = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;align=center;labelBackgroundColor=#ffffff;verticalAlign=top;strokeWidth=2;strokeColor=#0080F0;shadow=0;dashed=0;shape=mxgraph.ios7.icons.looking_glass;',
  },
  _original_width: 30,
  _original_height: 30,
}

export function LookingGlass(props: DiagramNodeProps) {
  return (
    <Shape
      {...LOOKING_GLASS}
      {...props}
      _style={extendStyle(LOOKING_GLASS, props)}
    />
  )
}
