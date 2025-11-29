import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ATTRACTION = {
  _style: {
    entity:
      'html=1;dashed=0;aspect=fixed;verticalLabelPosition=bottom;verticalAlign=top;align=center;shape=mxgraph.gmdl.attractions;strokeColor=#ffffff;fillColor=#737373;shadow=0;strokeWidth=1;sketch=0;',
  },
  _width: 22,
  _height: 18,
}

export function Attraction(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ATTRACTION)} />
}
