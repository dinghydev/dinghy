import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MATERIAL_2 = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#AFFFAF;shape=mxgraph.archimate3.material;',
  },
  _original_width: 60,
  _original_height: 50,
}

export function Material2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, MATERIAL_2)} />
}
