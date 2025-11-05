import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const RETENTION_POLICY = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.security.retention_policy;',
  },
  _original_width: 54,
  _original_height: 55,
}

export function RetentionPolicy(props: NodeProps) {
  return (
    <Shape
      {...RETENTION_POLICY}
      {...props}
      _style={extendStyle(RETENTION_POLICY, props)}
    />
  )
}
