import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const EURO = {
  _style: {
    entity:
      'shape=mxgraph.signs.travel.euro;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 86,
  _original_height: 98,
}

export function Euro(props: NodeProps) {
  return <Shape {...EURO} {...props} _style={extendStyle(EURO, props)} />
}
