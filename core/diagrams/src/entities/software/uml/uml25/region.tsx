import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const REGION = {
  _style: {
    entity:
      'line;strokeWidth=1;direction=south;html=1;dashed=1;dashPattern=20 20;',
  },
  _width: 0,
  _height: 100,
}

export function Region(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, REGION)} />
}
