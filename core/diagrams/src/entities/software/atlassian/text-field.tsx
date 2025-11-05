import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TEXT_FIELD = {
  _style: {
    entity:
      'fillColor=none;strokeColor=none;html=1;fontSize=11;fontStyle=0;align=left;fontColor=#596780;fontStyle=1;fontSize=11',
  },
  _width: 0,
  _height: 58,
}

export function TextField(props: NodeProps) {
  return (
    <Shape {...TEXT_FIELD} {...props} _style={extendStyle(TEXT_FIELD, props)} />
  )
}
