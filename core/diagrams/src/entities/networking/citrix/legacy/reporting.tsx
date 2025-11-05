import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const REPORTING = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.reporting;',
  },
  _original_width: 61.5,
  _original_height: 69,
}

export function Reporting(props: NodeProps) {
  return (
    <Shape {...REPORTING} {...props} _style={extendStyle(REPORTING, props)} />
  )
}
