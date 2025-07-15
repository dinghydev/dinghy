import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const KEY_PERMISSIONS_ORANGE = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.security.key_permissions;fillColor=#DA4026;',
  _width: 25,
  _height: 53,
}

export function KeyPermissionsOrange(props: DiagramNodeProps) {
  return <Shape {...KEY_PERMISSIONS_ORANGE} {...props} />
}
