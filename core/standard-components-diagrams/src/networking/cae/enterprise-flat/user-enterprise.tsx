import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const USER_ENTERPRISE = {
  _style: {
    entity:
      'sketch=0;aspect=fixed;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#00188D;shape=mxgraph.azure.user',
  },
  _width: 47,
  _height: 50,
}

export function UserEnterprise(props: DiagramNodeProps) {
  return (
    <Shape
      {...USER_ENTERPRISE}
      {...props}
      _style={extendStyle(USER_ENTERPRISE, props)}
    />
  )
}
