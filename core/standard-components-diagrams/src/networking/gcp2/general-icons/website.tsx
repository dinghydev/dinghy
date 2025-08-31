import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WEBSITE = {
  _style:
    'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.website',
  _width: 100,
  _height: 97,
}

export function Website(props: DiagramNodeProps) {
  return <Shape {...WEBSITE} {...props} _style={extendStyle(WEBSITE, props)} />
}
