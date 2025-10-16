import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const WORKFLOW = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.workflow;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function Workflow(props: DiagramNodeProps) {
  return (
    <Shape {...WORKFLOW} {...props} _style={extendStyle(WORKFLOW, props)} />
  )
}
