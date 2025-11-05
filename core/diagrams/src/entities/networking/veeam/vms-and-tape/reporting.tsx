import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const REPORTING = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#EF8F21;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.reporting;',
  },
  _original_width: 44.8,
  _original_height: 44.8,
}

export function Reporting(props: NodeProps) {
  return (
    <Shape {...REPORTING} {...props} _style={extendStyle(REPORTING, props)} />
  )
}
