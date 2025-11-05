import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BLUETOOTH = {
  _style: {
    entity:
      'html=1;strokeWidth=1;shadow=0;dashed=0;shape=mxgraph.ios7.misc.bluetooth;fillColor=#007AFF;strokeColor=none;buttonText=;strokeColor2=#222222;fontColor=#222222;fontSize=8;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 15,
  _original_height: 15,
}

export function Bluetooth(props: NodeProps) {
  return (
    <Shape {...BLUETOOTH} {...props} _style={extendStyle(BLUETOOTH, props)} />
  )
}
