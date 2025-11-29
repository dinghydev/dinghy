import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SNACKBAR = {
  _style: {
    entity:
      'shape=rect;strokeColor=none;fillColor=#333333;fontColor=#FFFFFF;align=left;spacing=16;fontSize=13;spacingLeft=8;whiteSpace=wrap;html=1;',
  },
  _width: 0,
  _height: 48,
}

export function Snackbar(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SNACKBAR)} />
}
