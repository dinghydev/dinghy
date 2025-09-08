import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const WORKFLOW_SERVICE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=1;align=center;outlineConnect=0;dashed=0;outlineConnect=0;shape=mxgraph.aws3d.workflowService;fillColor=#ECECEC;strokeColor=#5E5E5E;aspect=fixed;',
  },
  _original_width: 182.20000000000002,
  _original_height: 148.4,
}

export function WorkflowService(props: DiagramNodeProps) {
  return (
    <Shape
      {...WORKFLOW_SERVICE}
      {...props}
      _style={extendStyle(WORKFLOW_SERVICE, props)}
    />
  )
}
