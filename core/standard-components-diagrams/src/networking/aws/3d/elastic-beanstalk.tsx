import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ELASTIC_BEANSTALK = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=1;align=center;outlineConnect=0;dashed=0;outlineConnect=0;shape=mxgraph.aws3d.elasticBeanstalk;fillColor=#ECECEC;strokeColor=#5E5E5E;aspect=fixed;',
  },
  _original_width: 182,
  _original_height: 140,
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
