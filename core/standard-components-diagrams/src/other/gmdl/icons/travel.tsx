import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TRAVEL = {
  _style: {
    entity:
      'html=1;dashed=0;aspect=fixed;verticalLabelPosition=bottom;verticalAlign=top;align=center;shape=mxgraph.gmdl.travel;strokeColor=none;fillColor=#737373;shadow=0;direction=south;sketch=0;',
  },
  _original_width: 20,
  _original_height: 20,
}

export function Travel(props: DiagramNodeProps) {
  return <Shape {...TRAVEL} {...props} _style={extendStyle(TRAVEL, props)} />
}
