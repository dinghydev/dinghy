import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DINING = {
  _style: {
    entity:
      'html=1;dashed=0;aspect=fixed;verticalLabelPosition=bottom;verticalAlign=top;align=center;shape=mxgraph.gmdl.dining;strokeColor=none;fillColor=#737373;shadow=0;sketch=0;',
  },
  _original_width: 18,
  _original_height: 20,
}

export function Dining(props: DiagramNodeProps) {
  return <Shape {...DINING} {...props} _style={extendStyle(DINING, props)} />
}
