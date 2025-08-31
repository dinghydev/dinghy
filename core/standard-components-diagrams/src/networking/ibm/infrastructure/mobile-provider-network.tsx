import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MOBILE_PROVIDER_NETWORK = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;fontColor=#4277BB;labelBackgroundColor=default;fontSize=12;spacingTop=3;image=img/lib/ibm/infrastructure/mobile_provider_network.svg;strokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function MobileProviderNetwork(props: DiagramNodeProps) {
  return (
    <Shape
      {...MOBILE_PROVIDER_NETWORK}
      {...props}
      _style={extendStyle(MOBILE_PROVIDER_NETWORK, props)}
    />
  )
}
