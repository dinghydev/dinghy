import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DATABASE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.database;',
  },
  _original_width: 42.5,
  _original_height: 50,
}

export function Database(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DATABASE)} />
}
