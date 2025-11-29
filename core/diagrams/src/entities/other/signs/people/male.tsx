import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MALE = {
  _style: {
    entity:
      'shape=mxgraph.signs.people.male;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 103,
  _original_height: 103,
}

export function Male(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, MALE)} />
}
