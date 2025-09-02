import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const KEY_PERMISSIONS_ORANGE = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.security.key_permissions;fillColor=#DA4026;',
  },
  _original_width: 25,
  _original_height: 53,
}

export function KeyPermissionsOrange(props: DiagramNodeProps) {
  return (
    <Shape
      {...KEY_PERMISSIONS_ORANGE}
      {...props}
      _style={extendStyle(KEY_PERMISSIONS_ORANGE, props)}
    />
  )
}
