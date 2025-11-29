import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const WORKSPACES = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.workspaces;fillColor=#D16A28;gradientColor=#F58435;gradientDirection=north;',
  },
  _original_width: 82.5,
  _original_height: 94.5,
}

export function Workspaces(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, WORKSPACES)} />
}
