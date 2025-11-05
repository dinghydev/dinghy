import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PXF = {
  _style: {
    entity:
      'shape=mxgraph.cisco.misc.pxf;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 64,
  _original_height: 82,
}

export function Pxf(props: NodeProps) {
  return <Shape {...PXF} {...props} _style={extendStyle(PXF, props)} />
}
