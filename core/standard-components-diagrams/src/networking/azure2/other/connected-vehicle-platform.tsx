import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CONNECTED_VEHICLE_PLATFORM = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Connected_Vehicle_Platform.svg;strokeColor=none;',
  _width: 68,
  _height: 52,
}

export function ConnectedVehiclePlatform(props: DiagramNodeProps) {
  return <Shape {...CONNECTED_VEHICLE_PLATFORM} {...props} />
}
