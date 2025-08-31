import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SAFETY = {
  _style: {
    entity:
      'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.safety',
  },
  _width: 100,
  _height: 96,
}

export function Safety(props: DiagramNodeProps) {
  return <Shape {...SAFETY} {...props} _style={extendStyle(SAFETY, props)} />
}
