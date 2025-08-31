import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AZURE_SERVICE_BUS = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Service_Bus.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
}

export function AzureServiceBus(props: DiagramNodeProps) {
  return (
    <Shape
      {...AZURE_SERVICE_BUS}
      {...props}
      _style={extendStyle(AZURE_SERVICE_BUS, props)}
    />
  )
}
