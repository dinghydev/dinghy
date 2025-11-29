import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ELASTIC_SAN = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Elastic_SAN.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function ElasticSan(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ELASTIC_SAN)} />
}
