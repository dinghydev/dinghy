import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CHECK_3 = {
  _style: {
    entity:
      'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.check_2',
  },
  _original_width: 100,
  _original_height: 100,
}

export function Check3(props: DiagramNodeProps) {
  return <Shape {...CHECK_3} {...props} _style={extendStyle(CHECK_3, props)} />
}
