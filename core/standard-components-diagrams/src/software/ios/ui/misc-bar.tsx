import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MISC_BAR = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;shadow=0;dashed=0;strokeWidth=2;shape=mxgraph.ios7.misc.misc_bar;strokeColor=#0080F0;fillColor=#e0e0e0',
  },
  _original_width: 175,
  _original_height: 28.000000000000004,
}

export function MiscBar(props: DiagramNodeProps) {
  return (
    <Shape {...MISC_BAR} {...props} _style={extendStyle(MISC_BAR, props)} />
  )
}
