import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const RETENTION_POLICY = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.security.retention_policy;',
  _width: 54,
  _height: 55,
}

export function RetentionPolicy(props: DiagramNodeProps) {
  return (
    <Shape
      {...RETENTION_POLICY}
      {...props}
      _style={extendStyle(RETENTION_POLICY, props)}
    />
  )
}
