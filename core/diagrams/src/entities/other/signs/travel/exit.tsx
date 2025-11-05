import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const EXIT = {
  _style: {
    entity:
      'shape=mxgraph.signs.travel.exit;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 98,
  _original_height: 93,
}

export function Exit(props: NodeProps) {
  return <Shape {...EXIT} {...props} _style={extendStyle(EXIT, props)} />
}
