import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VOICE = {
  _style: {
    entity:
      'html=1;dashed=0;aspect=fixed;verticalLabelPosition=bottom;verticalAlign=top;align=center;shape=mxgraph.gmdl.voice;strokeColor=#737373;fillColor=#737373;shadow=0;strokeWidth=2;sketch=0;',
  },
  _width: 12,
  _height: 20,
}

export function Voice(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, VOICE)} />
}
