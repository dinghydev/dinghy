import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const NOTE = {
  _style: {
    entity:
      'shape=note;whiteSpace=wrap;html=1;backgroundOutline=1;darkOpacity=0.05;',
  },
  _original_width: 80,
  _original_height: 100,
}

export function Note(props: DiagramNodeProps) {
  return <Shape {...NOTE} {...props} _style={extendStyle(NOTE, props)} />
}
