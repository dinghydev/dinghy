import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MATERIAL = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;strokeWidth=1;shape=rect;',
  },
  _width: 130,
  _height: 50,
}

export function Material(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, MATERIAL)} />
}
