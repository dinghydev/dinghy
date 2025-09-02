import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WORKERS = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.users;fillColor=#ACACAC;gradientColor=none;',
  },
  _original_width: 66,
  _original_height: 63,
}

export function Workers(props: DiagramNodeProps) {
  return <Shape {...WORKERS} {...props} _style={extendStyle(WORKERS, props)} />
}
