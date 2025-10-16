import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const KEY_PERMISSIONS_GREEN = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.security.key_permissions;fillColor=#7FBA42;',
  },
  _width: 25,
  _height: 53,
}

export function KeyPermissionsGreen(props: DiagramNodeProps) {
  return (
    <Shape
      {...KEY_PERMISSIONS_GREEN}
      {...props}
      _style={extendStyle(KEY_PERMISSIONS_GREEN, props)}
    />
  )
}
