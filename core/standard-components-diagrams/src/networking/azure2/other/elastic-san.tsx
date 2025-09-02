import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ELASTIC_SAN = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Elastic_SAN.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function ElasticSan(props: DiagramNodeProps) {
  return (
    <Shape
      {...ELASTIC_SAN}
      {...props}
      _style={extendStyle(ELASTIC_SAN, props)}
    />
  )
}
