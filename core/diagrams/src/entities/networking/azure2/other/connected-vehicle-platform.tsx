import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CONNECTED_VEHICLE_PLATFORM = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Connected_Vehicle_Platform.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 52,
}

export function ConnectedVehiclePlatform(props: NodeProps) {
  return (
    <Shape
      {...CONNECTED_VEHICLE_PLATFORM}
      {...props}
      _style={extendStyle(CONNECTED_VEHICLE_PLATFORM, props)}
    />
  )
}
