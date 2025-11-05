import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const KEY_PERMISSIONS = {
  _style: {
    entity:
      'sketch=0;aspect=fixed;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#00188D;shape=mxgraph.mscae.enterprise.key_permissions',
  },
  _width: 26,
  _height: 50,
}

export function KeyPermissions(props: NodeProps) {
  return (
    <Shape
      {...KEY_PERMISSIONS}
      {...props}
      _style={extendStyle(KEY_PERMISSIONS, props)}
    />
  )
}
