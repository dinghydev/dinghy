import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FISHING_PIER = {
  _style: {
    entity:
      'shape=mxgraph.signs.sports.fishing_pier;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 94,
  _original_height: 98,
}

export function FishingPier(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, FISHING_PIER)} />
}
