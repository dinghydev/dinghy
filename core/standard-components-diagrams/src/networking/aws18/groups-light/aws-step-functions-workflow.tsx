import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const AWS_STEP_FUNCTIONS_WORKFLOW = {
  _style: {
    group:
      'sketch=0;outlineConnect=0;gradientColor=none;html=1;whiteSpace=wrap;fontSize=12;fontStyle=0;shape=mxgraph.aws4.group;grIcon=mxgraph.aws4.group_aws_step_functions_workflow;strokeColor=#545B64;fillColor=none;verticalAlign=top;align=left;spacingLeft=30;fontColor=#545B64;dashed=0;',
    entity: {
      strokeColor: '#545B64',
      fontColor: '#545B64',
    },
  },
}

export function AwsStepFunctionsWorkflow(props: DiagramNodeProps) {
  return <Shape {...AWS_STEP_FUNCTIONS_WORKFLOW} {...props} />
}
