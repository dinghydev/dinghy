import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CLOVER = {
  _style: {
    entity:
      'image;html=1;image=img/lib/atlassian/Clover_Logo.svg;strokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function Clover(props: DiagramNodeProps) {
  return <Shape {...CLOVER} {...props} _style={extendStyle(CLOVER, props)} />
}
