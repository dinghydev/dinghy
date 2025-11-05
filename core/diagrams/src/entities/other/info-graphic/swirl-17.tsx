import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SWIRL_17 = {
  _style: {
    entity:
      'shape=manualInput;whiteSpace=wrap;html=1;shadow=0;fillColor=#F2931E;strokeColor=none;fontSize=12;fontColor=#FFFFFF;align=center;direction=north;flipH=1;rounded=0;',
  },
  _width: 10,
  _height: 215,
}

export function Swirl17(props: NodeProps) {
  return (
    <Shape {...SWIRL_17} {...props} _style={extendStyle(SWIRL_17, props)} />
  )
}
