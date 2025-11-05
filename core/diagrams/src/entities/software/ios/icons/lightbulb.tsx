import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LIGHTBULB = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;align=center;labelBackgroundColor=#ffffff;verticalAlign=top;strokeWidth=2;strokeColor=#0080F0;shadow=0;dashed=0;shape=mxgraph.ios7.icons.lightbulb;',
  },
  _width: 22.8,
  _height: 29.7,
}

export function Lightbulb(props: NodeProps) {
  return (
    <Shape {...LIGHTBULB} {...props} _style={extendStyle(LIGHTBULB, props)} />
  )
}
