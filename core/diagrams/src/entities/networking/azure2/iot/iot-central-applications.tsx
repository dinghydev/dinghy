import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const IOT_CENTRAL_APPLICATIONS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/iot/IoT_Central_Applications.svg;strokeColor=none;',
  },
  _original_width: 60,
  _original_height: 69,
}

export function IotCentralApplications(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, IOT_CENTRAL_APPLICATIONS)} />
  )
}
