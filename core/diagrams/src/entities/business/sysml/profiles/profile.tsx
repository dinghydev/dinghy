import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PROFILE = {
  _style: {
    entity:
      'shape=folder;tabWidth=80;tabHeight=20;tabPosition=left;html=1;whiteSpace=wrap;align=center;',
  },
  _width: 160,
  _height: 100,
}

export function Profile(props: NodeProps) {
  return <Shape {...PROFILE} {...props} _style={extendStyle(PROFILE, props)} />
}
