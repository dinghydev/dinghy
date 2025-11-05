import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BEAUTY_SALON = {
  _style: {
    entity:
      'shape=mxgraph.signs.travel.beauty_salon;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 96,
  _original_height: 100,
}

export function BeautySalon(props: NodeProps) {
  return (
    <Shape
      {...BEAUTY_SALON}
      {...props}
      _style={extendStyle(BEAUTY_SALON, props)}
    />
  )
}
