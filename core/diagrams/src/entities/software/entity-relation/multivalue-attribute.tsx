import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MULTIVALUE_ATTRIBUTE = {
  _style: {
    entity:
      'ellipse;shape=doubleEllipse;margin=3;whiteSpace=wrap;html=1;align=center;',
  },
  _width: 100,
  _height: 40,
}

export function MultivalueAttribute(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, MULTIVALUE_ATTRIBUTE)} />
}
