import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BLUETOOTH = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;align=center;labelBackgroundColor=#ffffff;verticalAlign=top;strokeWidth=2;strokeColor=#0080F0;shadow=0;dashed=0;shape=mxgraph.ios7.icons.bluetooth;pointerEvents=1',
  },
  _original_width: 15,
  _original_height: 28.799999999999997,
}

export function Bluetooth(props: DiagramNodeProps) {
  return (
    <Shape {...BLUETOOTH} {...props} _style={extendStyle(BLUETOOTH, props)} />
  )
}
