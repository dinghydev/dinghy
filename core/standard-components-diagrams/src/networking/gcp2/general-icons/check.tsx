import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CHECK = {
  _style:
    'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.check',
  _width: 100,
  _height: 80,
}

export function Check(props: DiagramNodeProps) {
  return <Shape {...CHECK} {...props} _style={extendStyle(CHECK, props)} />
}
