import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const POLICY = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.security.policy;',
  },
  _width: 53,
  _height: 49,
}

export function Policy(props: DiagramNodeProps) {
  return <Shape {...POLICY} {...props} _style={extendStyle(POLICY, props)} />
}
