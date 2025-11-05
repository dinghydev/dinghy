import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const WIFI = {
  _style: {
    entity:
      'html=1;strokeWidth=1;shadow=0;dashed=0;shape=mxgraph.ios7.misc.wifi;fillColor=#007AFF;strokeColor=none;buttonText=;strokeColor2=#222222;fontColor=#222222;fontSize=8;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 15,
  _original_height: 15,
}

export function Wifi(props: NodeProps) {
  return <Shape {...WIFI} {...props} _style={extendStyle(WIFI, props)} />
}
