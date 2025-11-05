import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TABLET_ANDROID = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.devices.tablet_android;',
  },
  _width: 56,
  _height: 37,
}

export function TabletAndroid(props: NodeProps) {
  return (
    <Shape
      {...TABLET_ANDROID}
      {...props}
      _style={extendStyle(TABLET_ANDROID, props)}
    />
  )
}
