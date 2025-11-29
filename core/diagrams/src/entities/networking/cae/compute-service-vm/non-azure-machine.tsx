import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const NON_AZURE_MACHINE = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Non_Azure_Machine.svg;strokeColor=none;',
  },
  _width: 31,
  _height: 50,
}

export function NonAzureMachine(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, NON_AZURE_MACHINE)} />
}
