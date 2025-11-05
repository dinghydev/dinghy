import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const INSPECTION = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.inspection;',
  },
  _original_width: 70,
  _original_height: 65,
}

export function Inspection(props: NodeProps) {
  return (
    <Shape {...INSPECTION} {...props} _style={extendStyle(INSPECTION, props)} />
  )
}
