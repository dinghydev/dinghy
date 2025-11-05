import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DEVICE_REGISTRY = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;fontColor=#4277BB;labelBackgroundColor=default;fontSize=12;spacingTop=3;image=img/lib/ibm/data/device_registry.svg;strokeColor=none;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function DeviceRegistry(props: NodeProps) {
  return (
    <Shape
      {...DEVICE_REGISTRY}
      {...props}
      _style={extendStyle(DEVICE_REGISTRY, props)}
    />
  )
}
