import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const WINDOWS_10_IOT_CORE_SERVICES = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Windows_10_IoT_Core_Services.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function Windows10IotCoreServices(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, WINDOWS_10_IOT_CORE_SERVICES)}
    />
  )
}
