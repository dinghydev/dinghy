import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ROLE = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#005F4B;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.role;',
  },
  _width: 28.000000000000004,
  _height: 39,
}

export function Role(props: DiagramNodeProps) {
  return <Shape {...ROLE} {...props} _style={extendStyle(ROLE, props)} />
}
