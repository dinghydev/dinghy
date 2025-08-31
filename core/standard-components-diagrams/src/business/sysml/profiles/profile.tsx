import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PROFILE = {
  _style: {
    entity:
      'shape=folder;tabWidth=80;tabHeight=20;tabPosition=left;html=1;whiteSpace=wrap;align=center;',
  },
  _width: 160,
  _height: 100,
}

export function Profile(props: DiagramNodeProps) {
  return <Shape {...PROFILE} {...props} _style={extendStyle(PROFILE, props)} />
}
