import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const GLOBE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.globe;',
  },
  _original_width: 78.5,
  _original_height: 75,
}

export function Globe(props: NodeProps) {
  return <Shape {...GLOBE} {...props} _style={extendStyle(GLOBE, props)} />
}
