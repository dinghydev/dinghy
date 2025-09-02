import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SWIRL_18 = {
  _style: {
    entity:
      'shape=manualInput;whiteSpace=wrap;html=1;shadow=0;fillColor=#AE4132;strokeColor=none;fontSize=12;fontColor=#FFFFFF;align=center;direction=north;flipH=1;rounded=0;',
  },
  _original_width: 11,
  _original_height: 215,
}

export function Swirl18(props: DiagramNodeProps) {
  return (
    <Shape {...SWIRL_18} {...props} _style={extendStyle(SWIRL_18, props)} />
  )
}
