import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BAMBOO = {
  _style: {
    entity:
      'image;image=img/lib/atlassian/Bamboo_Logo.svg;html=1;strokeColor=none;',
  },
  _width: 64,
  _height: 74,
}

export function Bamboo(props: DiagramNodeProps) {
  return <Shape {...BAMBOO} {...props} _style={extendStyle(BAMBOO, props)} />
}
