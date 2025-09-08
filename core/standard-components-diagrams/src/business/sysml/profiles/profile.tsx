import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PROFILE = {
  _style: {
    entity:
      'shape=folder;tabWidth=80;tabHeight=20;tabPosition=left;html=1;whiteSpace=wrap;align=center;',
  },
  _original_width: 160,
  _original_height: 100,
}

export function Profile(props: DiagramNodeProps) {
  return <Shape {...PROFILE} {...props} _style={extendStyle(PROFILE, props)} />
}
