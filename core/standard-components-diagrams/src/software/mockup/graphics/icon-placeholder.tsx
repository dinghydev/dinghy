import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ICON_PLACEHOLDER = {
  _style:
    'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;strokeWidth=1;shape=mxgraph.mockup.graphics.simpleIcon;strokeColor=#999999;',
  _width: 50,
  _height: 50,
}

export function IconPlaceholder(props: DiagramNodeProps) {
  return <Shape {...ICON_PLACEHOLDER} {...props} />
}
