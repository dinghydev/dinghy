import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ELASTIC_BEANSTALK = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.elastic_beanstalk;fillColor=#F58534;gradientColor=none;',
  },
  _width: 67.5,
  _height: 93,
}

export function ElasticBeanstalk(props: DiagramNodeProps) {
  return (
    <Shape
      {...ELASTIC_BEANSTALK}
      {...props}
      _style={extendStyle(ELASTIC_BEANSTALK, props)}
    />
  )
}
