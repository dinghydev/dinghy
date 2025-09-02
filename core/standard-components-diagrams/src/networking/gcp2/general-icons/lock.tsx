import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LOCK = {
  _style: {
    entity:
      'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.lock',
  },
  _original_width: 78,
  _original_height: 100,
}

export function Lock(props: DiagramNodeProps) {
  return <Shape {...LOCK} {...props} _style={extendStyle(LOCK, props)} />
}
