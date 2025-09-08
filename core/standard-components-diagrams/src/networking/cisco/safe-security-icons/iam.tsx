import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const IAM = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.security_icons.iam;',
  },
  _original_width: 37.5,
  _original_height: 47,
}

export function Iam(props: DiagramNodeProps) {
  return <Shape {...IAM} {...props} _style={extendStyle(IAM, props)} />
}
