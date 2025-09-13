import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SWIRL_6 = {
  _style: {
    entity:
      'rounded=0;whiteSpace=wrap;shadow=0;strokeColor=none;strokeWidth=6;fillColor=none;fontSize=7;fontColor=#FFFFFF;align=left;html=1;spacingLeft=5;',
  },
  _width: 5,
  _height: 456,
}

export function Swirl6(props: DiagramNodeProps) {
  return <Shape {...SWIRL_6} {...props} _style={extendStyle(SWIRL_6, props)} />
}
