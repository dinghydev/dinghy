import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SONICO = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.sonico;fillColor=#3FEAF6;gradientColor=#117EC9',
  },
  _original_width: 102.4,
  _original_height: 102.4,
}

export function Sonico(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SONICO)} />
}
