import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TABLET_WINDOWS_8 = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.devices.tablet_windows_8;',
  },
  _width: 56,
  _height: 35,
}

export function TabletWindows8(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, TABLET_WINDOWS_8)} />
}
