import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MIXER = {
  _style:
    'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.mixer;',
  _width: 80,
  _height: 100,
}

export function Mixer(props: DiagramNodeProps) {
  return <Shape {...MIXER} {...props} />
}
