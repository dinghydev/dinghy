import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const AUTOMATION_2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.automation2;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function Automation2(props: NodeProps) {
  return (
    <Shape
      {...AUTOMATION_2}
      {...props}
      _style={extendStyle(AUTOMATION_2, props)}
    />
  )
}
