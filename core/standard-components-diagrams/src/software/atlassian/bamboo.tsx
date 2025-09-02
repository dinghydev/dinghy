import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BAMBOO = {
  _style: {
    entity:
      'image;html=1;image=img/lib/atlassian/Bamboo_Logo.svg;strokeColor=none;',
  },
  _original_width: 64,
  _original_height: 74,
}

export function Bamboo(props: DiagramNodeProps) {
  return <Shape {...BAMBOO} {...props} _style={extendStyle(BAMBOO, props)} />
}
