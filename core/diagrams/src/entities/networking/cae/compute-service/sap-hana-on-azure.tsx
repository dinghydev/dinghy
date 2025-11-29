import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SAP_HANA_ON_AZURE = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/SAP_HANA_on_Azure.svg;strokeColor=none;',
  },
  _width: 50,
  _height: 25,
}

export function SapHanaOnAzure(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SAP_HANA_ON_AZURE)} />
}
