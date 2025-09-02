import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const REPOSITORY = {
  _style: {
    entity:
      'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.repository',
  },
  _original_width: 60,
  _original_height: 100,
}

export function Repository(props: DiagramNodeProps) {
  return (
    <Shape {...REPOSITORY} {...props} _style={extendStyle(REPOSITORY, props)} />
  )
}
