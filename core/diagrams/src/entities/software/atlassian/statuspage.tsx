import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const STATUSPAGE = {
  _style: {
    entity:
      'image;html=1;image=img/lib/atlassian/Statuspage_Logo.svg;strokeColor=none;',
  },
  _width: 75,
  _height: 52,
}

export function Statuspage(props: DiagramNodeProps) {
  return (
    <Shape {...STATUSPAGE} {...props} _style={extendStyle(STATUSPAGE, props)} />
  )
}
