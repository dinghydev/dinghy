import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WORKFLOW = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.workflow;',
  },
  _width: 60,
  _height: 60,
}

export function Workflow(props: DiagramNodeProps) {
  return (
    <Shape {...WORKFLOW} {...props} _style={extendStyle(WORKFLOW, props)} />
  )
}
