import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CLOVER = {
  _style: {
    entity:
      'image;html=1;image=img/lib/atlassian/Clover_Logo.svg;strokeColor=none;',
  },
  _original_width: 71,
  _original_height: 71,
}

export function Clover(props: DiagramNodeProps) {
  return <Shape {...CLOVER} {...props} _style={extendStyle(CLOVER, props)} />
}
