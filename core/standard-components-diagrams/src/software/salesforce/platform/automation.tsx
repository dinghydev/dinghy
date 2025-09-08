import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const AUTOMATION = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.automation;',
  },
  _original_width: 60,
  _original_height: 58.199999999999996,
}

export function Automation(props: DiagramNodeProps) {
  return (
    <Shape {...AUTOMATION} {...props} _style={extendStyle(AUTOMATION, props)} />
  )
}
