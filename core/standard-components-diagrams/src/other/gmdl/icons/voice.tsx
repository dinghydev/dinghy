import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VOICE = {
  _style: {
    entity:
      'html=1;dashed=0;aspect=fixed;verticalLabelPosition=bottom;verticalAlign=top;align=center;shape=mxgraph.gmdl.voice;strokeColor=#737373;fillColor=#737373;shadow=0;strokeWidth=2;sketch=0;',
  },
  _original_width: 12,
  _original_height: 20,
}

export function Voice(props: DiagramNodeProps) {
  return <Shape {...VOICE} {...props} _style={extendStyle(VOICE, props)} />
}
