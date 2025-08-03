import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const AZURE_SERVICE_BUS_RELAYS = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Service_Bus_Relay.svg;strokeColor=none;',
  _width: 50,
  _height: 50,
}

export function AzureServiceBusRelays(props: DiagramNodeProps) {
  return <Shape {...AZURE_SERVICE_BUS_RELAYS} {...props} />
}
