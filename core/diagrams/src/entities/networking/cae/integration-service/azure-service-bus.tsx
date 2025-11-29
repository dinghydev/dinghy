import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const AZURE_SERVICE_BUS = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Service_Bus.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function AzureServiceBus(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, AZURE_SERVICE_BUS)} />
}
