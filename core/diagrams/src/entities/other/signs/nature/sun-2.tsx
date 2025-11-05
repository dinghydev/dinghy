import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SUN_2 = {
  _style: {
    entity:
      'shape=mxgraph.signs.nature.sun_2;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 99,
  _original_height: 99,
}

export function Sun2(props: NodeProps) {
  return <Shape {...SUN_2} {...props} _style={extendStyle(SUN_2, props)} />
}
