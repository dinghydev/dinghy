import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TSUNAMI = {
  _style: {
    entity:
      'shape=mxgraph.signs.nature.tsunami;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 99,
  _original_height: 88,
}

export function Tsunami(props: NodeProps) {
  return <Shape {...TSUNAMI} {...props} _style={extendStyle(TSUNAMI, props)} />
}
