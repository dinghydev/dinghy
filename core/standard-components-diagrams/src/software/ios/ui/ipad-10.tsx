import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const IPAD_10 = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;shadow=0;dashed=0;strokeWidth=1;shape=mxgraph.ios7.misc.ipad10inch;strokeColor=#c0c0c0;',
  },
  _width: 488,
  _height: 693,
}

export function Ipad10(props: DiagramNodeProps) {
  return <Shape {...IPAD_10} {...props} _style={extendStyle(IPAD_10, props)} />
}
