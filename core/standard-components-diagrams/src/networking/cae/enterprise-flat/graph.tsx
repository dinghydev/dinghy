import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const GRAPH = {
  _style: {
    entity:
      'sketch=0;aspect=fixed;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#00188D;shape=mxgraph.mscae.general.graph',
  },
  _width: 60,
  _height: 60,
}

export function Graph(props: DiagramNodeProps) {
  return <Shape {...GRAPH} {...props} _style={extendStyle(GRAPH, props)} />
}
