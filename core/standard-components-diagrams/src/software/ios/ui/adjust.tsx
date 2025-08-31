import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ADJUST = {
  _style:
    'html=1;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;shadow=0;dashed=0;strokeWidth=2;shape=mxgraph.ios7.misc.adjust;gradientColor=none;sketch=0;',
  _width: 80,
  _height: 20,
}

export function Adjust(props: DiagramNodeProps) {
  return <Shape {...ADJUST} {...props} _style={extendStyle(ADJUST, props)} />
}
