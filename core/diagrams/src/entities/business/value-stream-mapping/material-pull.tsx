import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MATERIAL_PULL = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=2;shape=mxgraph.lean_mapping.physical_pull;pointerEvents=1;',
  },
  _original_width: 100,
  _original_height: 100,
}

export function MaterialPull(props: NodeProps) {
  return (
    <Shape
      {...MATERIAL_PULL}
      {...props}
      _style={extendStyle(MATERIAL_PULL, props)}
    />
  )
}
