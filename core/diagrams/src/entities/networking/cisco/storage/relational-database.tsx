import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const RELATIONAL_DATABASE = {
  _style: {
    entity:
      'shape=mxgraph.cisco.storage.relational_database;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 66,
  _original_height: 53,
}

export function RelationalDatabase(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, RELATIONAL_DATABASE)} />
}
