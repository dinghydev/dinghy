import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DESKTOP_WEB = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.desktop_web;',
  },
  _width: 76.5,
  _height: 90,
}

export function DesktopWeb(props: DiagramNodeProps) {
  return (
    <Shape
      {...DESKTOP_WEB}
      {...props}
      _style={extendStyle(DESKTOP_WEB, props)}
    />
  )
}
