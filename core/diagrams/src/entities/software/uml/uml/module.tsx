import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MODULE = {
  _style: {
    entity:
      'shape=module;align=left;spacingLeft=20;align=center;verticalAlign=top;whiteSpace=wrap;html=1;',
  },
  _width: 100,
  _height: 50,
}

export function Module(props: NodeProps) {
  return <Shape {...MODULE} {...props} _style={extendStyle(MODULE, props)} />
}
