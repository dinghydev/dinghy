import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MIXER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.mixer;',
  },
  _width: 80,
  _height: 100,
}

export function Mixer(props: DiagramNodeProps) {
  return <Shape {...MIXER} {...props} _style={extendStyle(MIXER, props)} />
}
