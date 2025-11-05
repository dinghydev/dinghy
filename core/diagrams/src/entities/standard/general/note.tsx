import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const NOTE = {
  _style: {
    entity:
      'shape=note;whiteSpace=wrap;html=1;backgroundOutline=1;darkOpacity=0.05;',
  },
  _width: 80,
  _height: 100,
}

export function Note(props: NodeProps) {
  return <Shape {...NOTE} {...props} _style={extendStyle(NOTE, props)} />
}
