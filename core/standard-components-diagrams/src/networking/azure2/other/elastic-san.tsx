import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ELASTIC_SAN = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Elastic_SAN.svg;',
  _width: 68,
  _height: 68,
}

export function ElasticSan(props: DiagramNodeProps) {
  return <Shape {...ELASTIC_SAN} {...props} />
}
