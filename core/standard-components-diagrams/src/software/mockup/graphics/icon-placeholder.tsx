import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ICON_PLACEHOLDER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;strokeWidth=1;shape=mxgraph.mockup.graphics.simpleIcon;strokeColor=#999999;',
  },
  _width: 60,
  _height: 60,
}

export function IconPlaceholder(props: DiagramNodeProps) {
  return (
    <Shape
      {...ICON_PLACEHOLDER}
      {...props}
      _style={extendStyle(ICON_PLACEHOLDER, props)}
    />
  )
}
