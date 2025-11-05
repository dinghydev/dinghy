import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const NEPTUNE = {
  _style: {
    entity:
      'shape=mxgraph.signs.nature.neptune;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 87,
  _original_height: 98,
}

export function Neptune(props: NodeProps) {
  return <Shape {...NEPTUNE} {...props} _style={extendStyle(NEPTUNE, props)} />
}
