import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SHELTER = {
  _style: {
    entity:
      'shape=mxgraph.signs.sports.shelter;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 98,
  _original_height: 90,
}

export function Shelter(props: NodeProps) {
  return <Shape {...SHELTER} {...props} _style={extendStyle(SHELTER, props)} />
}
