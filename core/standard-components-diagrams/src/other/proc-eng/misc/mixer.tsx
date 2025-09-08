import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MIXER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.mixer;',
  },
  _original_width: 80,
  _original_height: 100,
}

export function Mixer(props: DiagramNodeProps) {
  return <Shape {...MIXER} {...props} _style={extendStyle(MIXER, props)} />
}
