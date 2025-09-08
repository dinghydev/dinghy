import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SENSING_LINK_SQUIB = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.miscellaneous.sensing_link_squib',
  },
  _original_width: 130,
  _original_height: 40,
}

export function SensingLinkSquib(props: DiagramNodeProps) {
  return (
    <Shape
      {...SENSING_LINK_SQUIB}
      {...props}
      _style={extendStyle(SENSING_LINK_SQUIB, props)}
    />
  )
}
