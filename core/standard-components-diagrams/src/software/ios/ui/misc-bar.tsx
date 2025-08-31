import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MISC_BAR = {
  _style:
    'html=1;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;shadow=0;dashed=0;strokeWidth=2;shape=mxgraph.ios7.misc.misc_bar;strokeColor=#0080F0;fillColor=#e0e0e0',
  _width: 175,
  _height: 28.000000000000004,
}

export function MiscBar(props: DiagramNodeProps) {
  return (
    <Shape {...MISC_BAR} {...props} _style={extendStyle(MISC_BAR, props)} />
  )
}
