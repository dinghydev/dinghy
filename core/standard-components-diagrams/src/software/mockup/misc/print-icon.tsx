import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PRINT_ICON = {
  _style: {
    entity:
      'strokeColor=#999999;verticalLabelPosition=bottom;shadow=0;dashed=0;verticalAlign=top;strokeWidth=2;html=1;shape=mxgraph.mockup.misc.printIcon;',
  },
  _width: 60,
  _height: 60,
}

export function PrintIcon(props: DiagramNodeProps) {
  return (
    <Shape {...PRINT_ICON} {...props} _style={extendStyle(PRINT_ICON, props)} />
  )
}
