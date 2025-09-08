import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MATERIAL = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;strokeWidth=1;shape=rect;',
  },
  _original_width: 130,
  _original_height: 50,
}

export function Material(props: DiagramNodeProps) {
  return (
    <Shape {...MATERIAL} {...props} _style={extendStyle(MATERIAL, props)} />
  )
}
