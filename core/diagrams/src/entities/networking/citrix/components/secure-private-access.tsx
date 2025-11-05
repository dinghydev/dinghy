import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SECURE_PRIVATE_ACCESS = {
  _style: {
    entity:
      'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.secure_private_access2;',
  },
  _width: 50,
  _height: 34.82,
}

export function SecurePrivateAccess(props: NodeProps) {
  return (
    <Shape
      {...SECURE_PRIVATE_ACCESS}
      {...props}
      _style={extendStyle(SECURE_PRIVATE_ACCESS, props)}
    />
  )
}
