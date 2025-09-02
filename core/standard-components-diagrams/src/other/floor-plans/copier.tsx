import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COPIER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.copier;',
  },
  _original_width: 110,
  _original_height: 60,
}

export function Copier(props: DiagramNodeProps) {
  return <Shape {...COPIER} {...props} _style={extendStyle(COPIER, props)} />
}
