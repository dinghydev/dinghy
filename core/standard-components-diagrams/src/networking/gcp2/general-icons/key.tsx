import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const KEY = {
  _style: {
    entity:
      'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.key',
  },
  _width: 100,
  _height: 47,
}

export function Key(props: DiagramNodeProps) {
  return <Shape {...KEY} {...props} _style={extendStyle(KEY, props)} />
}
