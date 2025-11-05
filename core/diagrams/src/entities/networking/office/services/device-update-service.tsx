import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DEVICE_UPDATE_SERVICE = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.services.device_update_service;',
  },
  _original_width: 50,
  _original_height: 54,
}

export function DeviceUpdateService(props: NodeProps) {
  return (
    <Shape
      {...DEVICE_UPDATE_SERVICE}
      {...props}
      _style={extendStyle(DEVICE_UPDATE_SERVICE, props)}
    />
  )
}
