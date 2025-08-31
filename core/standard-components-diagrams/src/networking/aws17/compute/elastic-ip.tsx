import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ELASTIC_IP = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.elastic_ip;fillColor=#F58534;gradientColor=none;',
  },
  _width: 76.5,
  _height: 21,
}

export function ElasticIp(props: DiagramNodeProps) {
  return (
    <Shape {...ELASTIC_IP} {...props} _style={extendStyle(ELASTIC_IP, props)} />
  )
}
