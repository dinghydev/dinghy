import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DESKTOP_WEB = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.desktop_web;',
  },
  _original_width: 76.5,
  _original_height: 90,
}

export function DesktopWeb(props: NodeProps) {
  return (
    <Shape
      {...DESKTOP_WEB}
      {...props}
      _style={extendStyle(DESKTOP_WEB, props)}
    />
  )
}
