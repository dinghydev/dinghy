import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LIGHTBULB = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;align=center;labelBackgroundColor=#ffffff;verticalAlign=top;strokeWidth=2;strokeColor=#0080F0;shadow=0;dashed=0;shape=mxgraph.ios7.icons.lightbulb;',
  },
  _original_width: 22.8,
  _original_height: 29.7,
}

export function Lightbulb(props: DiagramNodeProps) {
  return (
    <Shape {...LIGHTBULB} {...props} _style={extendStyle(LIGHTBULB, props)} />
  )
}
