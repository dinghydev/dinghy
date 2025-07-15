import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const RETENTION_POLICY_TAG = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.security.retention_policy_tag;',
  _width: 56,
  _height: 58,
}

export function RetentionPolicyTag(props: DiagramNodeProps) {
  return <Shape {...RETENTION_POLICY_TAG} {...props} />
}
