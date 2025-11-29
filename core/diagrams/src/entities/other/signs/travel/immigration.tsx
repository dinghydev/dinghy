import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const IMMIGRATION = {
  _style: {
    entity:
      'shape=mxgraph.signs.travel.immigration;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 94,
  _original_height: 99,
}

export function Immigration(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, IMMIGRATION)} />
}
