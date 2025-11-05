import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const IOT_INTERNET_OF_THINGS_PLATFORM = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.iot_internet_of_things_platform;',
  },
  _original_width: 56.4,
  _original_height: 55.5,
}

export function IotInternetOfThingsPlatform(props: NodeProps) {
  return (
    <Shape
      {...IOT_INTERNET_OF_THINGS_PLATFORM}
      {...props}
      _style={extendStyle(IOT_INTERNET_OF_THINGS_PLATFORM, props)}
    />
  )
}
