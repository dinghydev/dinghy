import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BAG = {
  _style:
    'html=1;verticalLabelPosition=bottom;align=center;labelBackgroundColor=#ffffff;verticalAlign=top;strokeWidth=2;strokeColor=#0080F0;shadow=0;dashed=0;shape=mxgraph.ios7.icons.bag;',
  _width: 21,
  _height: 21,
}

export function Bag(props: DiagramNodeProps) {
  return <Shape {...BAG} {...props} _style={extendStyle(BAG, props)} />
}
