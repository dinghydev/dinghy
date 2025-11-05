import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MIGRATION = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.migration;',
  },
  _width: 59,
  _height: 34,
}

export function Migration(props: NodeProps) {
  return (
    <Shape {...MIGRATION} {...props} _style={extendStyle(MIGRATION, props)} />
  )
}
