import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WORKFLOW_2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.workflow2;',
  },
  _width: 60,
  _height: 60,
}

export function Workflow2(props: DiagramNodeProps) {
  return (
    <Shape {...WORKFLOW_2} {...props} _style={extendStyle(WORKFLOW_2, props)} />
  )
}
