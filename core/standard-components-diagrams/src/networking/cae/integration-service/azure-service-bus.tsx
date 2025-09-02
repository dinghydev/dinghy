import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AZURE_SERVICE_BUS = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Service_Bus.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 50,
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
