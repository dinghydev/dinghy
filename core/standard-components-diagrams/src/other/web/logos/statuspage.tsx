import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const STATUSPAGE = {
  _style: {
    entity:
      'image;image=img/lib/atlassian/Statuspage_Logo.svg;html=1;strokeColor=none;',
  },
  _original_width: 75,
  _original_height: 52,
}

export function Statuspage(props: DiagramNodeProps) {
  return (
    <Shape {...STATUSPAGE} {...props} _style={extendStyle(STATUSPAGE, props)} />
  )
}
