import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TOOLKIT_FOR_ECLIPSE = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.toolkit_for_eclipse;fillColor=#342074;gradientColor=none;',
  },
  _original_width: 70.5,
  _original_height: 78,
}

export function ToolkitForEclipse(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, TOOLKIT_FOR_ECLIPSE)} />
}
