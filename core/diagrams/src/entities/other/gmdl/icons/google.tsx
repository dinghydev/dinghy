import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const GOOGLE = {
  _style: {
    entity:
      'html=1;dashed=0;aspect=fixed;verticalLabelPosition=bottom;verticalAlign=top;align=center;shape=mxgraph.gmdl.google;strokeColor=none;fillColor=#737373;shadow=0;sketch=0;',
  },
  _width: 16,
  _height: 24,
}

export function Google(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, GOOGLE)} />
}
