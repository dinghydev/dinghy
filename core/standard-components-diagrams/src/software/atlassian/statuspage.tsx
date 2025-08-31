import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

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
