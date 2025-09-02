import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const RETENTION_POLICY_TAG = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.security.retention_policy_tag;',
  },
  _original_width: 56,
  _original_height: 58,
}

export function RetentionPolicyTag(props: DiagramNodeProps) {
  return (
    <Shape
      {...RETENTION_POLICY_TAG}
      {...props}
      _style={extendStyle(RETENTION_POLICY_TAG, props)}
    />
  )
}
