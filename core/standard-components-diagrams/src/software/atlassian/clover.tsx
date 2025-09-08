import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

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
