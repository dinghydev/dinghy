import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ISOMETRIC_CUBE = {
  _style: {
    entity:
      'html=1;whiteSpace=wrap;shape=isoCube2;backgroundOutline=1;isoAngle=15;',
  },
  _original_width: 90,
  _original_height: 100,
}

export function IsometricCube(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ISOMETRIC_CUBE)} />
}
