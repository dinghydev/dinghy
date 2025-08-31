import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DEVICE_REGISTRY = {
  _style:
    'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;fontColor=#4277BB;labelBackgroundColor=default;fontSize=12;spacingTop=3;image=img/lib/ibm/data/device_registry.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
}

export function DeviceRegistry(props: DiagramNodeProps) {
  return (
    <Shape
      {...DEVICE_REGISTRY}
      {...props}
      _style={extendStyle(DEVICE_REGISTRY, props)}
    />
  )
}
