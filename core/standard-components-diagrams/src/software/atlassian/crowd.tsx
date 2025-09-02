import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CROWD = {
  _style: {
    entity:
      'image;html=1;image=img/lib/atlassian/Crowd_Logo.svg;strokeColor=none;',
  },
  _original_width: 66,
  _original_height: 65,
}

export function Crowd(props: DiagramNodeProps) {
  return <Shape {...CROWD} {...props} _style={extendStyle(CROWD, props)} />
}
