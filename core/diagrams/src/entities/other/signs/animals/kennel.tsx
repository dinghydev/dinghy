import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const KENNEL = {
  _style: {
    entity:
      'shape=mxgraph.signs.animals.kennel;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 97,
  _original_height: 94,
}

export function Kennel(props: NodeProps) {
  return <Shape {...KENNEL} {...props} _style={extendStyle(KENNEL, props)} />
}
