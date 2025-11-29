import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CROSS_COUNTRY_SKIING_1 = {
  _style: {
    entity:
      'shape=mxgraph.signs.sports.cross_country_skiing_1;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 98,
  _original_height: 94,
}

export function CrossCountrySkiing1(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, CROSS_COUNTRY_SKIING_1)} />
  )
}
