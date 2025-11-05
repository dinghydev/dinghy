import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const STATUSPAGE = {
  _style: {
    entity:
      'image;image=img/lib/atlassian/Statuspage_Logo.svg;html=1;strokeColor=none;',
  },
  _width: 75,
  _height: 52,
}

export function Statuspage(props: NodeProps) {
  return (
    <Shape {...STATUSPAGE} {...props} _style={extendStyle(STATUSPAGE, props)} />
  )
}
