import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MODULE = {
  _style: {
    entity:
      'shape=module;align=left;spacingLeft=20;align=center;verticalAlign=top;whiteSpace=wrap;html=1;',
  },
  _original_width: 100,
  _original_height: 50,
}

export function Module(props: DiagramNodeProps) {
  return <Shape {...MODULE} {...props} _style={extendStyle(MODULE, props)} />
}
