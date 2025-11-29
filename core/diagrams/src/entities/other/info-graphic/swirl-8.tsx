import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SWIRL_8 = {
  _style: {
    entity:
      'shape=manualInput;whiteSpace=wrap;html=1;shadow=0;fillColor=#F2931E;strokeColor=none;fontSize=12;fontColor=#FFFFFF;align=center;direction=north;flipV=1;rounded=0;',
  },
  _width: 1,
  _height: 215,
}

export function Swirl8(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SWIRL_8)} />
}
