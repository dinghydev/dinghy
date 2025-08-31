import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SHARE = {
  _style:
    'html=1;verticalLabelPosition=bottom;align=center;labelBackgroundColor=#ffffff;verticalAlign=top;strokeWidth=2;strokeColor=#0080F0;shadow=0;dashed=0;shape=mxgraph.ios7.icons.share;',
  _width: 21,
  _height: 28.5,
}

export function Share(props: DiagramNodeProps) {
  return <Shape {...SHARE} {...props} _style={extendStyle(SHARE, props)} />
}
