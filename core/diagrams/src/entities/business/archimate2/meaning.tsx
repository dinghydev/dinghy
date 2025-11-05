import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MEANING = {
  _style: {
    entity: 'fillColor=#ffff99;whiteSpace=wrap;shape=cloud;html=1;',
  },
  _width: 100,
  _height: 75,
}

export function Meaning(props: NodeProps) {
  return <Shape {...MEANING} {...props} _style={extendStyle(MEANING, props)} />
}
