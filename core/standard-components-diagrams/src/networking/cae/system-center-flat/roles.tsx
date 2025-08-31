import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ROLES = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#515151;shape=mxgraph.mscae.system_center.roles',
  _width: 42,
  _height: 50,
}

export function Roles(props: DiagramNodeProps) {
  return <Shape {...ROLES} {...props} _style={extendStyle(ROLES, props)} />
}
