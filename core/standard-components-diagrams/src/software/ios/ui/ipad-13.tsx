import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const IPAD_13 = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;shadow=0;dashed=0;strokeWidth=1;shape=mxgraph.ios7.misc.ipad13inch;strokeColor=#c0c0c0;',
  },
  _width: 572,
  _height: 813.0000000000001,
}

export function Ipad13(props: DiagramNodeProps) {
  return <Shape {...IPAD_13} {...props} _style={extendStyle(IPAD_13, props)} />
}
