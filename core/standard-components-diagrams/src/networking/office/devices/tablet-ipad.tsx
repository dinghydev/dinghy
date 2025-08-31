import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TABLET_IPAD = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.devices.tablet_ipad;',
  },
  _width: 39,
  _height: 52,
}

export function TabletIpad(props: DiagramNodeProps) {
  return (
    <Shape
      {...TABLET_IPAD}
      {...props}
      _style={extendStyle(TABLET_IPAD, props)}
    />
  )
}
