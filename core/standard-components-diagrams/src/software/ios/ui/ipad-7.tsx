import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const IPAD_7 = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;shadow=0;dashed=0;strokeWidth=1;shape=mxgraph.ios7.misc.ipad7inch;strokeColor=#c0c0c0;',
  },
  _width: 366,
  _height: 549,
}

export function Ipad7(props: DiagramNodeProps) {
  return <Shape {...IPAD_7} {...props} _style={extendStyle(IPAD_7, props)} />
}
